"use client";
import React from "react";
import { Button } from "./ui/button";
import { RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const RetryButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.refresh()} variant="secondary">
      Retry
      <RotateCw className=" ml-2 w-6 h-6" />
    </Button>
  );
};

export default RetryButton;
