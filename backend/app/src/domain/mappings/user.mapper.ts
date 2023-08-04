import { User } from '$infrastructure/database';

export const mapUserToPublic = (user: User) => ({
  email: user.email,
  username: user.username,
  id: user.id,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});
