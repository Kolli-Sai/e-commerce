"use client";

import React from "react";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const GoBackButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <MoveLeft className=" mr-2 w-6 h-6" />
      Go back
    </Button>
  );
};

export default GoBackButton;
