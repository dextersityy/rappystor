"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { db } from "@/lib/db";
import { Product } from "@/lib/types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const prods = await db.getProducts();
      setProducts(prods);
    };
    fetchProducts();
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-8 md:px-10 lg:px-20 py-5">
          <div className="mx-auto flex max-w-[960px] flex-1 flex-col">
            <div className="w-full @container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(14, 86, 241, 0.1) 0%, rgba(16, 22, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsdCI9bTASZ4OFhMxbnOS2YcSplAnK_CCd967a-R1UP6-jfyfYdvc2u3Usku6ZnMQ746gppoBG7Y38W_YbwS2LD3I9RPJ3PVUWy6sochx7ocUoHSNjUGvh8-R-33vWx5nCcXnG94bJcoJjzyFuEpEl0lpjbhyUMcVhTG5qOjcnCyoYKtC1UFpL9LXEiQIljfB0WL_NvHJxh3ZxC1ee15WH0H7lE0UVUUeJFPnPPI97eLaSo44LVpJKe0UeSsV_TyM-EotMSK_ReEm3")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center max-w-2xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Your Favorite Apps, Premium & Affordable
                    </h1>
                    <h2 className="text-white/80 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Instantly access premium accounts for streaming,
                      productivity, and more.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-transform transform hover:scale-105">
                    <span className="truncate">Browse All Products</span>
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
              Featured Accounts
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={`$${product.price.toFixed(2)} / 12 Months`}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
