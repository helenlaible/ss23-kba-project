import {
  SignOptions,
  sign as jwtSign,
  decode as jwtDecode,
  JwtPayload,
  verify as jwtVerify,
  VerifyOptions,
} from 'jsonwebtoken';
import { EnvironmentSymbol, Environment } from '$infrastructure/config';
import { resolveDependency } from '$infrastructure/di';

export const AuthToken = {
  sign: async (data: object | string, secretKey: string, options: SignOptions = {}): Promise<string> => {
    const conf = resolveDependency<Environment>(EnvironmentSymbol);
    return jwtSign(data, secretKey, { algorithm: 'ES256', issuer: conf.JWT_ISSUER, ...options });
  },

  verify: (token: string, publicKey: string, options: VerifyOptions = {}) => {
    const conf = resolveDependency<Environment>(EnvironmentSymbol);
    return jwtVerify(token, publicKey, { issuer: conf.JWT_ISSUER, ...options });
  },

  decode: (token: string) => jwtDecode(token) as JwtPayload | null,
};
