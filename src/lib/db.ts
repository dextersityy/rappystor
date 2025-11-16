import { Product, User } from "./types";

// Mock database
let products: Product[] = [
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    price: 5.99,
    description: "Listen without limits.",
    category: "music",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc_QQkCLXf8tnwOOmq5Lie5tr2ja-KpSejMRAPtMr-vozFpviTEyr27D1CqFDlnFd5Rq9SM8LC7oDNjs4RGb8tTa1tuTd3qItmlPtcr8NvxS1OLjNc8dE20xu9I578jUhzr4p-ot7yUo8-VvmxhId76V_Iw4uXM9F-G3Q3TZzoP0ODL5SNK38ejJx128tnsNKi0jhJib1haL7t6Iw3WKHvnEiOlMQjMr5FeTXsgj24sKwl_HTsHoc9GpZbfy5bb51djrH9bHU0AyHx",
  },
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    price: 8.99,
    description: "Watch your favorite shows in 4K.",
    category: "streaming",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGO91JVc3NLycveJ-y3WgXBnXjxVL-QIVIaVi4xmAjvSfMygfDLIPj6rapCjXoe4d-4KdRyL7dHfSnu6OlbRn6PZGyrF_N52vT9Hhb_TmmbZdjs6NbTYcyjo2trM1BCp7CqoAQA2GYd7aVXTzy2vQhO_A0-dkEUhP7837gDccQtE-Mlo6Ss1pFSXaJyo_cWlGwkPOsqM5Gig57X55G3OLJV0XtiF9P1ixt6XT3zV3s8T2XAsjkNhRTyto2EP240216A-A11qScg_mE",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    price: 6.99,
    description: "Ad-free YouTube and YouTube Music.",
    category: "streaming",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2vEpC_LoTUhVQo5sA1FEieo7u5ZBA2E1-3jOWDL-3P14VdjfAR4n8M8lTUm9DK4oZgjdzz1O--km67Wj7qQDOkNfqt9UwbL97hVzX4798tqnO_JLityfNkGtM4CZK-pJXGY529UKuDYIsOTsd7kG1eDyDbWt4U2otk0gqLFfalspG5XRfWY6YvhHld-_-MuP6PCLUbFgImKc9iNZbRFnKPa0J5fB5Ox9RER73BZJuehH0c6xCaxlMbnzVHPaenbDI_BCrcbEAYv4",
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    price: 9.99,
    description: "Design anything.",
    category: "editing",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7xMrysgQYwKC98ITJaeflfY13Zri-YpD5gHyGP4VRSU6aIMv9Krq9njKP1BsgqXxpR2wOTmO4dp0Os_wOdUvEiYgTdhTPDIWXKxiVV3BpRmsbylKZXfR-3WasLoUmuwPxZu7UQmD-B0xhGEWsv1SQzwZzHlzybAgUFuXSjfs6kKbU8LJPtXKSj59n25FLihSOnysPWR5w3QT13BkjFz4594Cyrsj_LLjahK8IKhkWBg_vn_TY8SnL7jLvWfv51aiag95tdh-ulJfl",
  },
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    price: 19.99,
    description: "The complete creative suite.",
    category: "editing",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAYrh2_Zkx2oLdI0db89pfhQA6Y2ckReyAqOEMH_GUlAf-jJ-V9024WLJe6ijhsVpEFjoZQe7P3wwmGbDkOC0njxTAOEjNXTXxdAjsI9fJPOKp5Kzv9fdiuLySy96p3bZZqN63VUQGBVwPS4OzPpEurzW_YHpatKHiBq3MLNhdekThO72CjNNvAKsDRU1xyhSF6UBJy76oWdmZYb1SRNhcFyZVo-Pzg9OMV7T79gpUtnyTKei-3ldGyoLm5YPrSwW2hLibC4C8mkpc",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    price: 7.99,
    description: "Productivity tools for home and office.",
    category: "tools",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5U93AQ7Z5JEcA5X2rSuBu9cxR0CtrVOnKYLpPmH6SbDBtRmr66DBHOrGmnqEej6otADgwzwzcDvum6NWv6PjOBxoZpqcm4QSM_rOGx-bOj7Fa_r9rW5uj7EOV0n6NRFzAPFU_8T2wRSBbvNhbDUCtkwWDdpiRFh6L-IRhsP2ZEp9DFNN5MZodIGIJfNm5ODICrkaCNdgWbKJsq9Sr1SVqbLJKDurToYPrp66gICFZ1DlrRKaG2jzqqzjsXK0JpUYYunurB12DBcMM",
  },
  {
    id: "disney-plus",
    name: "Disney+",
    price: 4.99,
    description: "The best stories in the world, all in one place.",
    category: "streaming",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpb0Gr1miMxwdu7o8HeoElUPeAD9WiohaI_Wj_KW4ODU4M9zfrt5xHWOUs_afG5Y1xIaWYwCKvgeZeHqq2LjoV6vQL0cWYpqYKqKiqxnsprRdM3sqd2dVqHJanHQRTjIlzLlOwU6Npg6TkN8N2u-oyTcqeAf7XQws7W3Np-Q-rnunggHn0NHlecA--LgVVrREDsKkL3vP5GHTId2zJ4K5a57asFzXxJzA4ra6Yxc5wHoP9cmrO_pCrsyB5MkGwhxb1FTXb_vFIVmoA",
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    price: 7.99,
    description: "Where storytelling takes center stage.",
    category: "streaming",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgPsqgIPMPtMpX1BZf6KFSYCot9C7IneJsvfLPtNl4jXLQT99w6_q4gl_6fQ6pNHCm8Xc5Ew0OXxTGNt0BIqi76ojJzjdVjBZg9zNgHidnRJ8C0fuu7jzP2Qhfrf_sQNqDVQcU12iprZ4Mvaqwkw38qJ7Zrhcf_jn6s1aPfzOGYtJyiFAyhVZL5Lf0MMDfy-PL5NGD_BAHeGnaE4zvWI_xF2fN8cB0BW_SEvIVLv0C6ZQuA8QRRbUOwuEG1v5Ca-5sUuJQc862xnxz",
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
  addProduct: async (product: Omit<Product, "id" | "imageUrl">): Promise<Product> => {
    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      ...product,
      imageUrl: "https://via.placeholder.com/150" // Default image for new products
    };
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
