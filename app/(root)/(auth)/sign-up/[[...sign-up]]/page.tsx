import { SignUp } from '@clerk/nextjs'  

const page = () => {
  return <div className='min-h-screen w-full bg-black bg-dot-white/[0.2] flex justify-center items-center'>
    <SignUp/>
  </div>
}

export default page
