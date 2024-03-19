"use client"
import { Iportfolio } from '@/lib/database/models/portfolio.model'
import './Darkheroprem.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


  type portfolioProps = {
    data:Iportfolio,
    adminData: boolean
    userId:any
  }

const DarkpremHero = ({data , adminData, userId} : portfolioProps) => {

  const router = useRouter();
  
  
  return (
    <>
    {
      adminData && (
       <div onClick={()=>{
        router.push(`/portfolio/edit/${userId}`)
       }} className='absolute top-4 right-4'  >
        <div className='h-12 rounded-lg w-48 bg-violet-700 flex justify-center items-center' >
          <p className='text-white' >Edit Your Portfolio</p>

        </div>
         
       </div>
      )
    }
    
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
            <Button className='bg-white text-teal-700 font-medium' >  Connect With Me ⚡</Button>
           </Link>
            <a href={data.githuburl}>
            <div className="github-button">
              <p>Star on Github 💫</p>
            </div>
            </a>
          </div>
        
      </div>
      <div className='w-full flex flex-wrap items-center justify-center gap-8 text-teal-300 mt-16 ' >
        <p className='text-green-300' >Linkedin</p>
        <p className='text-red-300'>Github</p>
        <p>Email</p>
        <p className='text-yellow-300' >Additiniols</p>
      </div>
    </div>  
  </div>
  </>
  )
}

export default DarkpremHero
