
import DashBoard from '@/components/shared/edit/DashBoard'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {

  const user = await currentUser();

  
  return (
   <>
   <DashBoard userId={user?.id} />
   </>
  )
}

export default page
