"use client";

import { useState } from "react";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      setTimeout(() => {
        if (user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setTimeout(() => {
        router.push("/");
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1a202e] rounded-xl">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 text-white bg-[#282d39] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 text-white bg-[#282d39] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleLogin}
            className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary/90"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="w-full py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
