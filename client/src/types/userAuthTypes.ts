export interface IUserInfo {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}

export interface ErrorResponse {
  details: string;
}