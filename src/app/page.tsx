"use client";
import { CssBaseline } from "@mui/material";
import Categories from "./categories/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/sign-in");
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <Categories />
    </div>
  );
}
