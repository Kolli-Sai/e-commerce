"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TypographyH3 } from "./ui/typography";
import { Heart, Home, LockKeyhole, LogOut, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {
  image?: string;
};

const Profile = (props: Props) => {
  let pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  
  let [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/user/products",
      icon: Home,
    },
    {
      id : 6,
      name : 'Profile',
      href : '/user/profile',
      icon : User
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
    
    {
      id: 5,
      name: "Logout",
      href: "/user/logout",
      icon: LogOut,
    },
  ];
  if(session?.user.role === "ADMIN"){
    links.splice(3,0,{
      id: 4,
      name: "Admin",
      href: "/admin",
      icon: LockKeyhole,
    })
  }
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Avatar>
            <AvatarImage src={props?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-4 py-6">
          <div className=" w-full h-[20px]"></div>
          {links.map((link) => {
            let Icon = link.icon;
            return (
              <Link
                onClick={() => {
                  if (pathname !== "/admin") {
                    setOpen(!open);
                  }
                }}
                className=" px-6 flex items-center "
                href={link.href}
                key={link.href}
              >
                <Icon className=" mr-2" />
                {link.name}
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Profile;
