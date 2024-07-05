import { User } from "./userTypes";

export type RegisterParams = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
  status: string;
  user: User;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  status: string;
  user: User;
};
