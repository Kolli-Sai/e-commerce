import GoBackButton from "@/components/go-back-button";
import RetryButton from "@/components/retry-button";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyLead } from "@/components/ui/typography";
import { FileWarning, MoveLeft } from "lucide-react";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center space-y-6 container">
        <div>
          <FileWarning className=" w-16 h-16 text-destructive mx-auto" />
        </div>
        <TypographyH3>404 | Not Found</TypographyH3>
        <TypographyLead className=" text-center ">
          The page you are looking for does not exist.
        </TypographyLead>
        <div className=" flex items-center justify-center gap-3">
          <GoBackButton />
          <RetryButton />
        </div>
      </div>
    </>
  );
};

export default NotFound;
