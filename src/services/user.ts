import { LoginForm } from "../types/form";
import { LoginResponse } from "../types/user";
import { literaryApi } from "../utils/http";

export const userLogin = async (body: LoginForm): Promise<null | LoginResponse> => {
  try {
    const resp = await literaryApi.post("/user/login", body);
    return resp.data;
  } catch(err){
    console.log(err);
  }
  return null;
}