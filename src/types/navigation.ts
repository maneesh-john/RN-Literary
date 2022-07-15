import { BookResponse } from "./api";

export type GuestStackProps = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
}

export type AppStackProps = {
  Guest: undefined;
  User: undefined;
}

export type BookStackProps = {
  Book: undefined;
  BookDetails: { book: BookResponse };
  Checkout: { book: BookResponse };
}

export type SettingsStackProps = {
  Setting: undefined;
  EditProfile: undefined;
  Address: undefined;
  Support: undefined;
}