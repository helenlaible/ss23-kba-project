/* eslint-disable no-console */

import axios from 'axios';
import { generateKeyPairSync, privateDecrypt, randomBytes } from 'crypto';

import { SignUpInterface } from '$domain/interface/auth.interface';

const client = axios.create({ baseURL: 'http://localhost:8080' });

type SignUpResponse = {
  email: string;
  username: string;
  id: string;
  createdAt: string;
  hmacSecret: string;
};

export const signUp = async (user: SignUpInterface) => {
  return (await client.post('/auth/signup', user)).data as SignUpResponse;
};

(async () => {
  const id = randomBytes(4).toString('hex');
  const user = { email: `${id}@kba.de`, username: id, password: id };

  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const publicString = publicKey.export({ type: 'pkcs1', format: 'pem' }).toString();

  const signUpResponse = await signUp({ ...user, publicKey: publicString });
  const hmacSecret = privateDecrypt({ key: privateKey }, Buffer.from(signUpResponse.hmacSecret, 'base64')).toString();

  console.log(hmacSecret);
})();
