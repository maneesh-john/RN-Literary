import axios from "axios";

export const literaryApi = axios.create({
  baseURL: "https://greve-chocolatine-14280.herokuapp.com/api"
});