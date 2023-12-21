import React from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { poppins } from "@/components/fonts";
import { ToggleTheme } from "@/components/toggle-theme";
import Providers from "./providers";
type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en">
      <body className={cn(" antialiased h-screen w-full", poppins.className)}>
        <Providers >

        <main>{props.children}</main>
        <div className=" hidden md:block fixed bottom-10 right-10">
          <ToggleTheme />
        </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
