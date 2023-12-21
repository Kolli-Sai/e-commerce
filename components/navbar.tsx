import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./logo";
import Profile from "./profile";
import { ToggleTheme } from "./toggle-theme";
import SourceLink from "./source-link";
import { getAuthSession } from "@/lib/auth-options";

type Props = {};

const Navbar = async (props: Props) => {
  let { session } = await getAuthSession();
  return (
    <header className="sticky top-0 z-50  w-full border-b bg-background/95   backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" h-20 container flex justify-between items-center ">
        <Logo />
        <div className=" flex items-center gap-3">
          <div className=" md:hidden">
            <ToggleTheme />
          </div>
          <div className=" hidden md:block">
            <SourceLink />
          </div>
          {!session && (
            <Button asChild>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
          )}
          <div className=" md:hidden">
            {session && <Profile image={session.user.image ?? ""} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
