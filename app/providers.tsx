"use client";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        {props.children}
        <Toaster  />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
