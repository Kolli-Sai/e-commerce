import { TypographyH2, TypographyH3 } from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ban, ShieldAlert } from "lucide-react";

type Props = {};

const AdminPage = async (props: Props) => {
  const { session } = await getAuthSession();

  if (!session) {
    return redirect("/auth/login?callbackUrl=/admin");
  }

  if (session.user.role !== "ADMIN") {
    return (
      <>
        <Alert variant={"destructive"}>
          <Ban className="h-6 w-6" />
          <AlertTitle>UnAuthorized</AlertTitle>
          <AlertDescription>
            You are not authorized to access this page
          </AlertDescription>
        </Alert>
      </>
    );
  }
  return <TypographyH3>AdminPage</TypographyH3>;
};

export default AdminPage;
