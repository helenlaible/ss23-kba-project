#!/usr/bin/env node

import { build } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import esbuildPluginPino from "esbuild-plugin-pino";
import tsPaths from "./plugins/ts-paths.js";

build({
  entryPoints: ["src/server.ts"],
  bundle: true,
  minify: false,
  platform: "node",
  target: "node16",
  logLevel: "error",
  outdir: "dist",
  plugins: [
    clean({ patterns: ["./dist/*"] }),
    esbuildPluginPino({ transports: [] }),
    tsPaths({ externals: ["prisma"] }),
    copy({
      assets: {
        from: ["./src/infrastructure/database/prisma/.prisma/**/*"],
        to: ["./prisma"],
      },
    }),
  ],
});
