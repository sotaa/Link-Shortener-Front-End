import { IToken } from "./token.interface";

export interface IUser {
  remainingDays?: number;
  name?: string;
  email?: string;
  password?: string;
  mobile?: string;
  token?: string;
}
