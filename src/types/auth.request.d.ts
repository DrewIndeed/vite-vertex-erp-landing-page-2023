export type LoginResponse = {
  message: string;
  token?: string;
  domain?: string;
};

export type DecodedJwt = {
  sub: string;
  email_verified: boolean;
  iss: string;
  "cognito:username": string;
  origin_jti: string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  email: string;
};
