import { SignUp } from '@clerk/nextjs'  

const page = () => {
  return <div className='min-h-screen w-full bg-loginBgImage flex justify-center items-center'>
    <SignUp/>
  </div>
}

export default page
