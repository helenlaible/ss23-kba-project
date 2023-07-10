import { resolve } from 'path';
import { App } from '$infrastructure/webserver';
import { resolveDependency as load } from '$infrastructure/di';
import { AuthRouter } from '$interface/routes/auth.route';
import { UserRouter } from '$interface/routes/user.route';

export const app = App({
  root: resolve(__dirname, '..'),
  plugins: () => [],
  routes: () => [load(AuthRouter), load(UserRouter)],
}).listen();
