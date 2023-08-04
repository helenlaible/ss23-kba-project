import { generateKeyPairSync, randomBytes } from 'crypto';

import { EnvironmentSymbol, Environment } from '$infrastructure/config';
import { resolveDependency } from '$infrastructure/di';

export const KeyHandler = {
  generateKeys: () => {
    const conf = resolveDependency<Environment>(EnvironmentSymbol);
    return generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: conf.JWT_PRIVATE_KEY,
      },
    });
  },
  generateSecret: () => {
    return randomBytes(64).toString('hex');
  },
};
