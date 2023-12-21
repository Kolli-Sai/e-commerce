import { TypographyH2 } from '@/components/ui/typography'
import { getAuthSession } from '@/lib/auth-options';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const ProductsPage = async(props: Props) => {
  const {session} = await getAuthSession();
  if(!session){
    return redirect('/auth/login?callbackUrl=/user/products')
  }
  return (
   <TypographyH2>
    Products Page
   </TypographyH2>
  )
}

export default ProductsPage