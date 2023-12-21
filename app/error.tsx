"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import { AlertCircle, MoveLeft, RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" w-full h-screen bg-background flex flex-col justify-center items-center space-y-6">
      <div className=" container w-full md:w-[500px] h-auto  space-y-6">
        <div>
            <AlertCircle className=" w-16 h-16 text-destructive mx-auto" />
        </div>
        <TypographyH3 className=" text-center">{error.message}</TypographyH3>
        <div className=" flex justify-center items-center gap-3">
          <Button onClick={() => router.back()}>
            <MoveLeft className=" mr-2 w-6 h-6" />
            Go back
          </Button>
          <Button onClick={() => reset()} variant={"secondary"}>
            Retry
            <RotateCw className=" ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
