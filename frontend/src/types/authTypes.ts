import { User } from "./userTypes";

export type RegisterParams = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  token: React.SetStateAction<null>;
  status: string;
  user: User;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: React.SetStateAction<null>;
  status: string;
  user: User;
};
