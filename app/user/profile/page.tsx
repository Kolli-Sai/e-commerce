import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const ProfilePage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/login?callbackUrl=/user/profile");
  }
  return <div>ProfilePage</div>;
};

export default ProfilePage;
