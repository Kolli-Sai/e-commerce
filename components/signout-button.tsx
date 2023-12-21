"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "./ui/use-toast";
type Props = {};

const SignoutButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const callbackUrl =
    searchParams.get("callbackUrl") ||
    (process.env.NEXT_PUBLIC_BASE_URL as string);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await signOut({ redirect: false, callbackUrl });
      setIsLoading(false);
      router.push(callbackUrl);
      router.refresh();
      toast({
        title: "Logged out",
        description: "You have been logged out",
        variant: "default",
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <Button disabled={isLoading} onClick={handleLogout} variant={"secondary"}>
      {isLoading && <Loader className="w-6 h-6 mr-2 animate-spin" />}
      Signout
      <LogOut className=" w-6 h-6 ml-2" />
    </Button>
  );
};

export default SignoutButton;
