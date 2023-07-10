import fastGlob from "fast-glob";
import { resolve } from "path";
import { readFileSync } from "fs";
import normalizePath from "normalize-path";

const { sync: glob } = fastGlob;
const normalize = process.platform === "win32" ? normalizePath : (x) => x;

const stripJsonComments = (data) => {
  return data.replace(
    /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    (m, g) => (g ? "" : m)
  );
};

export default ({ externals = [] }) => {
  const { compilerOptions } = JSON.parse(
    stripJsonComments(
      readFileSync(resolve(process.cwd(), "./tsconfig.json"), "utf8")
    )
  );

  const pathAlias = Object.keys(compilerOptions.paths);
  const aliasRegex = new RegExp(
    `^(${pathAlias
      .join("|")
      .replaceAll("/", "\\/")
      .replaceAll("*", ".*")
      .replaceAll("$", "\\$")})`
  );

  return {
    name: "esbuild-ts-paths",
    setup(build) {
      build.onResolve({ filter: aliasRegex }, (args) => {
        const pathKey = pathAlias.find((key) =>
          new RegExp(
            `^${key}`
              .replaceAll("/", "\\/")
              .replaceAll("*", ".*")
              .replaceAll("$", "\\$")
          ).test(args.path)
        );
        const [pathDir] = pathKey.split("*");
        let file = args.path.replace(pathDir, "");
        if (file === args.path) {
          file = "";
        }
        for (const dir of compilerOptions.paths[pathKey]) {
          const fileDir = normalize(
            resolve(process.cwd(), dir).replace("*", file)
          );

          let [matchedFile] = glob(`${fileDir}.*`);
          if (!matchedFile) {
            const [matchIndexFile] = glob(`${fileDir}/index.*`).filter(
              (file) => !file.endsWith("d.ts")
            );
            matchedFile = matchIndexFile;
          }

          if (externals.some((path) => fileDir.includes(path))) {
            return {
              path: "./prisma/client/index.js",
              external: true,
            };
          }

          if (matchedFile) {
            return { path: matchedFile };
          }
        }
        return { path: args.path };
      });
    },
  };
};
