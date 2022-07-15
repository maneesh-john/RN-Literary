export type BookResponse = {
  _id: string;
  name: string;
  author: string;
  price: number;
  genre: string;
  description: string;
  cover: string;
}

export type AddressResponse = {
  coords: {
    lat: number;
    lng: number;
  };
  _id: string;
  userId: string;
  region: string;
  state: string;
  city: string;
  country: string;
}