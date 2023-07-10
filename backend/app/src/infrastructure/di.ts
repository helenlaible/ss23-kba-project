import { asFunction, asValue, createContainer, FunctionReturning, NameAndRegistrationPair } from 'awilix';
import { initializeApplicationLayer } from '$application';
import { initializeInterfaceLayer } from '$interface';

const di = createContainer();

export const resolveDependency = <T>(symbol: string) => di.resolve<T>(symbol);

export const registerValue = <T>(symbol: string, obj: T) => di.register({ [symbol]: asValue(obj) });
export const registerFunction = <T>(symbol: string, fn: FunctionReturning<T>) =>
  di.register({ [symbol]: asFunction(fn).singleton() });

export const funcDependency = <T>(fn: FunctionReturning<T>) => asFunction(fn).singleton();
export const registerDependencies = (fns: NameAndRegistrationPair<unknown>) => di.register(fns);

export const initializeDependencies = () => {
  initializeApplicationLayer();
  initializeInterfaceLayer();
};
