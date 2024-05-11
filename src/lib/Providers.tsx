"use client";
import { refreshTokenGen } from "@/app/(withComonLayout)/actions/auth";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname();

  useEffect(() => {
    refreshTokenGen();
  }, [location]);
  return (
    <React.Fragment>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Toaster />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </React.Fragment>
  );
};

export default Providers;
