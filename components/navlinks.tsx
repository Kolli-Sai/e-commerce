"use client";
import {
  ChevronRight,
  Heart,
  Home,
  LockKeyhole,
  LogOut,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyLead } from "@/components/ui/typography";
const NavLinks = (props: Props) => {
  const { data: session } = useSession();
  console.log({ session });

  const links = [
    {
      id: 1,
      name: "Home",
      href: "/user/products",
      icon: Home,
    },
    {
      id: 5,
      name: "My Profile",

      href: "/user/profile",
      icon: User,
    },
    {
      id: 2,
      name: "Favorites",
      href: "/user/favorites",
      icon: Heart,
    },
    {
      id: 3,
      name: "Cart",
      href: "/user/cart",
      icon: ShoppingCart,
    },
  ];

  if (session?.user.role === "ADMIN") {
    links.push({
      id: 4,
      name: "Admin",
      href: "/admin",
      icon: LockKeyhole,
    });
  }
  const pathname = usePathname();
  return (
    <div className=" flex flex-col justify-between  px-3 h-full ">
      <div className=" h-full w-full py-6">
        {/* <Link href={'/user/profile'} className={cn(
                  " flex justify-between items-center gap-2 py-3 px-6 w-full hover:bg-secondary hover:text-secondary-foreground my-2 rounded-lg ",
                  {
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground":
                      pathname === '/user/profile',
                  }
                )}>
          <Avatar>
            <AvatarImage src={session?.user.image ?? ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronRight />
        </Link> */}
        {links.map((link) => {
          let Icon = link.icon;
          return (
            <div key={link.id}>
              <Link
                className={cn(
                  " flex justify-start items-center gap-2 py-3 px-6 w-full hover:bg-secondary hover:text-secondary-foreground my-2 rounded-lg ",
                  {
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground":
                      pathname === link.href,
                  }
                )}
                href={link.href}
                key={link.id}
              >
                <Icon />
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="  h-auto w-full">
        <Link
          className={cn(
            " flex justify-start items-center gap-2 py-3 px-6 w-full hover:bg-secondary hover:text-secondary-foreground my-2 rounded-lg ",
            {
              "bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground":
                pathname === "/user/logout",
            }
          )}
          href={"/user/logout"}
        >
          <LogOut />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
