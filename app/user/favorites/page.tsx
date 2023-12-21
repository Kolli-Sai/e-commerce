import { TypographyH2 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const FavotitesPage = async(props: Props) => {
  const {session} = await getAuthSession();
  if(!session){
    return redirect('/auth/login?callbackUrl=/user/favorites')
  }
  return <TypographyH2>FavotitesPage</TypographyH2>;
};

export default FavotitesPage;
