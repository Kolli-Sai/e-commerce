import { poppins } from "@/components/fonts";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const HomePage = async(props: Props) => {
  const {session} = await getAuthSession();

  if(session){
    return redirect("/user/products");
  }
  return (
    <>
      <Navbar />
      <div className={cn(" container py-6")}>
        <TypographyH2>
          Landing Page
        </TypographyH2>
        <div className=" h-[150vh]"></div>
      </div>
    </>
  );
};

export default HomePage;
