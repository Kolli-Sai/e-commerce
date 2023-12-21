import React from "react";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/navlinks";
import { Separator } from "@/components/ui/separator";
import { getAuthSession } from "@/lib/auth-options";


type Props = {
  children: React.ReactNode;
};

const UserLayout = async (props: Props) => {
  const { session } = await getAuthSession();
  return (
    <>
      <Navbar />
      <div className=" hidden md:block">
        <div className="flex  h-[calc(100vh-90px)]      overflow-hidden ">
          <div className=" border-r w-[200px] h-full overflow-y-auto ">
            <NavLinks />
          </div>

          <div className=" flex-grow overflow-y-auto px-6 py-12">
            {props.children}
          </div>
        </div>
      </div>
      <div className=" md:hidden container py-12">{props.children}</div>
    </>
  );
};

export default UserLayout;
