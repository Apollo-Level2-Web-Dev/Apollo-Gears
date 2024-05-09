"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <NextUIProvider>
        {" "}
        <NextThemesProvider attribute="class" defaultTheme="dark">
        <Toaster />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </React.Fragment>
  );
};

export default Providers;
