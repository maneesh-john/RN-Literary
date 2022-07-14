export type Role = "Customer" | "Vendor" | "";

export type LoginResponse = {
  user: {
      _id: string;
      email: string;
      role: Role;
      approved: boolean;
      name: string;
  },
  token: string;
}