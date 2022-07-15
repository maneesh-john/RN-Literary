import axios from "axios";

import { AddressResponse } from "../types/api";
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

export const registerUser = async (data: LoginForm): Promise<null | LoginResponse> => {
  const body = { ...data, role: "Customer" };
  try {
    const resp = await literaryApi.post("/user", body);
    return resp.data;
  } catch(err){
    console.log(err);
  }
  return null;
}

export const getAddresses = async (token: string): Promise<AddressResponse[]> => {

  const config =  {
    headers: { Authorization: token }
  }

  try {
    const resp = await literaryApi.get("/address", config);
    return resp.data;
  } catch(err) {
    console.log(err);
  }
  return [];
}

export const getLocation = async (lat: number, lng: number): Promise<Record<string, string> | null> => {

  const API_TOKEN = "371a0f7f1b9f483699aeec5e9b64e80b";

  try {
    const resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_TOKEN}`);
    return resp.data?.results?.[0]?.components || null;
  } catch(err) {
    console.log(err);
  }
  return null;
}

export const addNewAddress = async (token: string, body: any): Promise<AddressResponse | null> => {

  const config =  {
    headers: { Authorization: token }
  }

  try {
    const resp = await literaryApi.post("/address", body, config);
    return resp.data;
  } catch(err) {
    console.log(err);
  }
  return null;
}