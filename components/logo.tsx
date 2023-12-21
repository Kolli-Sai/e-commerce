import React from "react";
import { TypographyH3 } from "./ui/typography";
import { cn } from "@/lib/utils";
import { dancing_script } from "./fonts";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {

  return (
    <Link href={'/'}>
      <TypographyH3 className=" text-primary">Commerce</TypographyH3>
    </Link>
  )
};

export default Logo;
