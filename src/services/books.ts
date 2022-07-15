import { BookResponse } from "../types/api";
import { literaryApi } from "../utils/http";

export const getBookList = async (token: string): Promise<BookResponse[]> => {

  const config =  {
    headers: { Authorization: token }
  }

  try {
    const resp = await literaryApi.get("/book", config);
    return resp.data;
  } catch(err) {
    console.log(err);
  }
  return [];
}

export const placeOrder = async (token: string, body: { book: string, address: string }): Promise<any> => {

  const config =  {
    headers: { Authorization: token }
  }

  try {
    const resp = await literaryApi.post("/order", body, config);
    return resp.data;
  } catch(err) {
    console.log(err);
  }
  return null;
}