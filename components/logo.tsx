import React from "react";
import { TypographyH3 } from "./ui/typography";
import { cn } from "@/lib/utils";
import { dancing_script } from "./fonts";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className=" flex items-center gap-1">
      <ShoppingCart className=" w-8 h-8" />
      <TypographyH3 className=" text-primary">Commerce</TypographyH3>
    </Link>
  );
};

export default Logo;
