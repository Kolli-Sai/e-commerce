"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github, Loader2, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { getErrorMessage } from "@/lib/get-error-message";
type Props = {};

const SigninWithGithubButton = (props: Props) => {
  let searchParams = useSearchParams();
  let { toast } = useToast();
  let callbackUrl =
    searchParams.get("callbackUrl") || process.env.NEXT_PUBLIC_BASE_URL;
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      let login = await signIn("github", {
        callbackUrl,
        redirect: false,
      });
      if (login?.error) {
        throw new Error(login.error);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: getErrorMessage(error),
      });
    }
  };
  return (
    <Button disabled={isLoading} onClick={handleLogin} variant={"secondary"}>
      {isLoading && <Loader className=" w-6 h-6 mr-2 animate-spin" />}
      Sign in with Github
      <Github className=" w-6 h-6 ml-2" />
    </Button>
  );
};

export default SigninWithGithubButton;
