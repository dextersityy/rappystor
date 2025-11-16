"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-8 md:px-10 lg:px-20 py-3 bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-white">
        <div className="size-5 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          rppystore
        </h2>
      </div>
      <div className="flex flex-1 justify-end items-center gap-6">
        <nav className="hidden md:flex items-center gap-9">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-white text-sm">{user.email}</span>
              <button
                onClick={handleLogout}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
              >
                <span className="truncate">Logout</span>
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            >
              <span className="truncate">Login</span>
            </Link>
          )}
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#282d39] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#3a4152] transition-colors">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: 20 }}
            >
              shopping_cart
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
