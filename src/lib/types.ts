export interface User {
  uid: string;
  email: string | null;
  role: "member" | "reseller" | "admin";
  saldo: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "streaming" | "music" | "editing" | "AI" | "tools";
}
