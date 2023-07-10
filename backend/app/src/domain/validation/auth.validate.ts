export const SignUpSchema = {
  type: 'object',
  required: ['email', 'username', 'password'],
  properties: {
    email: { type: 'string', format: 'email', minLength: 1 },
    username: { type: 'string', minLength: 3 },
    password: { type: 'string', minLength: 6 },
  },
};

export const SignInSchema = {
  type: 'object',
  required: ['identifier', 'password'],
  properties: {
    identifier: { type: 'string', minLength: 1 },
    username: { type: 'string', minLength: 3 },
  },
};
