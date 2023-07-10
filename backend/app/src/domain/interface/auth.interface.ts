export interface SignUpInterface {
  email: string;
  username: string;
  password: string;
}

export interface SignInInterface {
  identifier: string;
  password: string;
}

export interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  reuseDetected: boolean;
}
