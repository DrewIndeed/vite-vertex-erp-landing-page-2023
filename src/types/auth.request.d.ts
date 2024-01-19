import { AxiosResponse } from 'axios';
export type LoginResponse = {
  message: string;
  token?: string;
  domain?: string;
  isExpired: boolean;
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

export interface SignUpResponse {
  message: string
  response: Response
}

export interface Response {
  User: User
}

export interface ConfigSiteResponse extends AxiosResponse {
  message: string,
  siteName: string,
  sitePassword: string,
  siteDomain: string,
}

export interface RegisterTrialResponse extends AxiosResponse {
  message: string,
}

export interface RegisterPremiumResponse extends AxiosResponse {
  message: string,
}

export interface User {
  Username: string
  Attributes: Attribute[]
  UserCreateDate: string
  UserLastModifiedDate: string
  Enabled: boolean
  UserStatus: string
}

export interface Attribute {
  Name: string
  Value: string
}

