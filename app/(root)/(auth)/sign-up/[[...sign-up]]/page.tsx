import { SignUp } from '@clerk/nextjs'  

const page = () => {
  return <div className='min-h-screen w-full px-10  bg-white  bg-grid-black/[0.05] flex justify-center items-center'>
    <SignUp/>
  </div>
}

export default page
