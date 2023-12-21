import React from "react";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/navlinks";
import { Separator } from "@/components/ui/separator";

type Props = {
  children: React.ReactNode;
};

const UserLayout = (props: Props) => {
  return (
   <>
    <Navbar />
      <div className=" hidden md:block">
        <div className="flex  h-[calc(100vh-90px)]      overflow-hidden">
          <div className=" w-[200px] h-full overflow-y-auto ">
            <NavLinks />
          </div>
          <Separator orientation="vertical" />

          <div className=" flex-grow overflow-y-auto px-6 py-12">
            {props.children}
          </div>
        </div>
      </div>
      <div className=" md:hidden container py-12">
      {props.children}
      </div>
   </>
  );
};

export default UserLayout;
