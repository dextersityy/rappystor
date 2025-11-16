"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAdminAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAdminAuth = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || user.role !== "admin")) {
        router.push("/");
      }
    }, [user, loading, router]);

    if (loading || !user || user.role !== "admin") {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-white">Loading...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAdminAuth;
};

export default withAdminAuth;
