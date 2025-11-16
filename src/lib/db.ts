import { Product, User } from "./types";

// Mock database
let products: Product[] = [
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    price: 5.99,
    description: "Listen without limits.",
    category: "music",
  },
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    price: 8.99,
    description: "Watch your favorite shows in 4K.",
    category: "streaming",
  },
];

let users: User[] = [
  {
    uid: "admin-user-id",
    email: "admin@rppystore.com",
    role: "admin",
    saldo: 1000,
  },
];

// Mock database service
export const db = {
  // Products
  getProducts: async (): Promise<Product[]> => {
    return Promise.resolve(products);
  },
  getProductById: async (id: string): Promise<Product | undefined> => {
    return Promise.resolve(products.find((p) => p.id === id));
  },
  addProduct: async (product: Omit<Product, "id">): Promise<Product> => {
    const newProduct: Product = { id: `prod-${Date.now()}`, ...product };
    products.push(newProduct);
    return Promise.resolve(newProduct);
  },
  updateProduct: async (
    id: string,
    updates: Partial<Product>
  ): Promise<Product | undefined> => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updates };
      return Promise.resolve(products[index]);
    }
    return Promise.resolve(undefined);
  },
  getUsers: async (): Promise<User[]> => {
    return Promise.resolve(users);
  },
  updateUserRole: async (
    uid: string,
    role: "member" | "reseller" | "admin"
  ): Promise<User | undefined> => {
    const index = users.findIndex((u) => u.uid === uid);
    if (index !== -1) {
      users[index].role = role;
      return Promise.resolve(users[index]);
    }
    return Promise.resolve(undefined);
  },

  // Users
  getUserById: async (uid: string): Promise<User | undefined> => {
    return Promise.resolve(users.find((u) => u.uid === uid));
  },
  updateUser: async (
    uid: string,
    updates: Partial<User>
  ): Promise<User | undefined> => {
    const index = users.findIndex((u) => u.uid === uid);
    if (index !== -1) {
      users[index] = { ...users[index], ...updates };
      return Promise.resolve(users[index]);
    }
    return Promise.resolve(undefined);
  },

  // Purchases
  purchaseProduct: async (
    userId: string,
    productId: string
  ): Promise<boolean> => {
    const user = users.find((u) => u.uid === userId);
    const product = products.find((p) => p.id === productId);

    if (user && product && user.saldo >= product.price) {
      user.saldo -= product.price;
      return Promise.resolve(true); // Purchase successful
    }
    return Promise.resolve(false); // Purchase failed
  },
};
