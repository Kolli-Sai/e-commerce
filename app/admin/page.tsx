import { TypographyH2 } from '@/components/ui/typography'
import { getAuthSession } from '@/lib/auth-options';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const AdminPage = async(props: Props) => {
  const {session} = await getAuthSession();

  if(!session){
    return redirect('/auth/login?callbackUrl=/admin')
  }

  if(session.user.role !== 'ADMIN'){
    return <TypographyH2>
      You are not authorized to access this page
    </TypographyH2>
  }
  return (
    <TypographyH2>AdminPage</TypographyH2>
  )
}

export default AdminPage