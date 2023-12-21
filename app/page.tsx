import { poppins } from "@/components/fonts";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyLead } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const HomePage = async (props: Props) => {
  const { session } = await getAuthSession();

  if (session) {
    return redirect("/user/products");
  }
  return (
    <>
      <Navbar />
      <div
        className={cn(
          " container py-6 h-[calc(100vh-90px)] w-full  grid grid-cols-1 md:grid-cols-2 gap-4"
        )}
      >
        <div className=" flex flex-col justify-center items-center">
          <div className="  w-full space-y-6">
            <TypographyH2 className=" text-center md:text-start">
              Welcome to the <span className="">E</span>commerce
            </TypographyH2>
            <TypographyLead className=" text-center md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe minima culpa cupiditate eius assumenda asperiores?
            </TypographyLead>
            <div className=" flex justify-center md:justify-start">
              <Button asChild>
                <Link href={'/auth/login'}>
                  Get Started
                  <MoveRight className=" ml-2 w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src={"/svgs/landing-page.svg"}
            width={500}
            height={500}
            alt="landing page svg"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
