import SigninWithGithubButton from "@/components/signin-with-github-button";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const LoginPage = async(props: Props) => {
  const { session } = await getAuthSession();
  if (session) {
    return redirect("/user/products");
  }
  return (
    <div className=" w-full h-screen grid grid-cols-1 md:grid-cols-2 ">
      <div className=" hidden md:block bg-primary w-full h-full"></div>
      <div className=" flex flex-col justify-center items-center gap-6">
        <TypographyH2>Sign into your account</TypographyH2>
        <SigninWithGithubButton />
      </div>
    </div>
  );
};

export default LoginPage;
