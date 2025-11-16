import { User } from "./types";

// Mock user database
const users: User[] = [
  {
    uid: "admin-user-id",
    email: "admin@rppystore.com",
    role: "admin",
    saldo: 1000,
  },
];

let listeners: ((user: User | null) => void)[] = [];

const notifyListeners = (user: User | null) => {
  listeners.forEach((callback) => callback(user));
};

// Mock authentication service
export const auth = {
  // Mock sign-up function
  createUserWithEmailAndPassword: (email: string, password?: string) => {
    return new Promise<User>((resolve, reject) => {
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        reject(new Error("User already exists"));
      } else {
        const newUser: User = {
          uid: `user-${Date.now()}`,
          email,
          role: "member",
          saldo: 0,
        };
        users.push(newUser);
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        notifyListeners(newUser);
        resolve(newUser);
      }
    });
  },

  // Mock sign-in function
  signInWithEmailAndPassword: (email: string, password?: string) => {
    return new Promise<User>((resolve, reject) => {
      const user = users.find((user) => user.email === email);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        notifyListeners(user);
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    });
  },

  // Mock sign-out function
  signOut: () => {
    return new Promise<void>((resolve) => {
      localStorage.removeItem("currentUser");
      notifyListeners(null);
      resolve();
    });
  },

  // Mock onAuthStateChanged function
  onAuthStateChanged: (callback: (user: User | null) => void) => {
    listeners.push(callback);
    const user = localStorage.getItem("currentUser");
    callback(user ? JSON.parse(user) : null);

    return () => {
      listeners = listeners.filter((l) => l !== callback);
    };
  },
};
