"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/db";
import { Product } from "@/lib/types";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaYoutube,
  FaSpotify,
  FaAd,
  FaRobot,
  FaWrench,
  FaQuestionCircle,
} from "react-icons/fa";

const iconComponents: { [key: string]: React.ElementType } = {
  streaming: FaYoutube,
  music: FaSpotify,
  editing: FaAd,
  AI: FaRobot,
  tools: FaWrench,
};

const ProductPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [purchaseStatus, setPurchaseStatus] = useState<
    "success" | "error" | "idle"
  >("idle");

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const prod = await db.getProductById(id as string);
        setProduct(prod || null);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  const handlePurchase = async () => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (product) {
      const success = await db.purchaseProduct(user.uid, product.id);
      setPurchaseStatus(success ? "success" : "error");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Product not found.</p>
      </div>
    );
  }

  const IconComponent = iconComponents[product.category] || FaQuestionCircle;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-8 md:px-10 lg:px-20 py-5">
          <div className="mx-auto flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 flex items-center justify-center rounded-xl bg-[#1a202e] p-4">
                <IconComponent className="w-1/2 h-1/2 text-white" />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold text-white">
                  {product.name}
                </h1>
                <p className="mt-4 text-2xl text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <p className="mt-4 text-white/80">{product.description}</p>
                <button
                  onClick={handlePurchase}
                  className="mt-8 w-full py-3 text-lg font-bold text-white bg-primary rounded-lg hover:bg-primary/90"
                >
                  Buy Now
                </button>
                {purchaseStatus === "success" && (
                  <p className="mt-4 text-green-500">
                    Purchase successful!
                  </p>
                )}
                {purchaseStatus === "error" && (
                  <p className="mt-4 text-red-500">
                    Purchase failed. Please check your balance.
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
