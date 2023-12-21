import { TypographyH2 } from '@/components/ui/typography'
import { getAuthSession } from '@/lib/auth-options';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const CartPage = async(props: Props) => {
  const {session} = await getAuthSession();
  if(!session){
    return redirect('/auth/login?callbackUrl=/user/cart')
  }
  return (
    <TypographyH2>CartPage</TypographyH2>
  )
}

export default CartPage