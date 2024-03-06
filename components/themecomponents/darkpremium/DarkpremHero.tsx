import { Iportfolio } from '@/lib/database/models/portfolio.model'
import './Darkheroprem.css'
import Editbutton from '@/components/shared/edit/Editbutton'
import AiForm from '@/components/shared/AiForm'
import AiImageForm from '@/components/shared/AiImageForm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeartHandshake } from 'lucide-react'


  type portfolioProps = {
    data:Iportfolio,
    adminData: boolean
  }

const DarkpremHero = ({data , adminData} : portfolioProps) => {

  
  
  
  return (
    <>
    {
      adminData && (
        <div className='absolute top h-20 w-full flex justify-end items-center pr-12'>
          <Editbutton portfolioId={data._id} />
        </div>
      )
    }
    {/* {
      adminData && (
        <div className='absolute top  h-20 w-full flex justify-end items-center pr-12'>
          <div className='h-10  flex justify-center items-center px-4 border-[1px] border-white absolute right-64 rounded-full'>
            <AiForm/>
          </div>
        </div>
      )
    } */}
    {/* {
      adminData && (
        <div className='h-10  flex justify-center items-center px-4 py-2 bg-zinc-700 rounded-full bg-opacity-25 absolute mt-6 right-[500px] '>
          <AiImageForm/>
        </div>
      )
    } */}
    <div >
    <div className="hero-main">
      <div className="navbar">
        {/* <Nav/> */}
      </div>
      <div className="hero-text">
          <div className="upper-light">
              <p>Connect With One Click</p>
            <a href={data.mailurl}>
            <img src={data.avatar} alt="person" />
            </a>
          </div>
          <div className="mid-bold-text">
            <h1>Hey, My Name is <span> {data.name}</span>  <br /> </h1>
            <h1 className='text-4xl font-medium' >{data.heading}</h1>
          </div>
          <div className="bottom-light-text">
            <p className='text-zinc-400' >computer science student with passion for cross platform dev  & Web App dev looking  for internship <br /> where i can apply my  skills! and highly motivated  to learn new technologies!</p>
          </div>

          <div className="hero-button">
           <Link href={data.linkedinurl}>
            <Button className='bg-white text-teal-700 font-medium' > <HeartHandshake className='mr-1' /> Connect Now</Button>
           </Link>
            <a href={data.githuburl}>
            <div className="github-button">
              <p>Star on Github 💫</p>
            </div>
            </a>
          </div>
        
      </div>
      <div className='w-full flex flex-wrap items-center justify-center gap-8 text-teal-300 mt-16 ' >
        <p className='text-green-300' >-NextJs</p>
        <p className='text-red-300'>-ReactJs</p>
        <p>-TypeScript</p>
        <p className='text-yellow-300' >-Flutter</p>
      </div>
    </div>  
  </div>
  </>
  )
}

export default DarkpremHero
