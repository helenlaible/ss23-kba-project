import { publicEncrypt } from 'crypto';

export const Encryption = {
  encryptPublic: (data: string, publicKey: string) => {
    const encrypted = publicEncrypt({ key: publicKey }, Buffer.from(data));
    return encrypted.toString('base64');
  },
};
