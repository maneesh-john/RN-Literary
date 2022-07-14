import { Role } from "./user";

export type UserData = {
  auth: boolean;
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export type Context = {
  user: UserData;
  loading: boolean;
  setUser: (u: UserData) => void;
  setLoading: (b: boolean) => void;
}