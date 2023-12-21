import SignoutButton from '@/components/signout-button'
import { TypographyH2, TypographyH3 } from '@/components/ui/typography'
import { getAuthSession } from '@/lib/auth-options'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const LogoutPage = async(props: Props) => {
  const {session} = await getAuthSession();
  if(!session){
    return redirect('/auth/login?callbackUrl=/user/favorites')
  }
  return (
    <div className='  h-full flex flex-col justify-center  gap-6'>
      <TypographyH3 className='text-center'>
        Are you sure you want to logout?
      </TypographyH3>
      <div className=' flex justify-center'>

      <SignoutButton />
      </div>

    </div>
  )
}

export default LogoutPage