import { Iportfolio } from '@/lib/database/models/portfolio.model'
import './Darkheroprem.css'
import Editbutton from '@/components/shared/edit/Editbutton'


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
    <div>
    <div className="hero-main">
      <div className="navbar">
        {/* <Nav/> */}
      </div>
      <div className="hero-text">
          <div className="upper-light">
              <p>Connect With One Click</p>
            <a href={data.mailurl}>
            {/* <img src={person} alt="person" /> */}
            </a>
          </div>
          <div className="mid-bold-text">
            <h1>Hey, My Name is <span> {data.name}</span>  <br /> {data.heading}</h1>
          </div>
          <div className="bottom-light-text">
            <p>computer science student with passion for cross platform dev  & Web App dev looking  for internship <br /> where i can apply my  skills! and highly motivated  to learn new technologies!</p>
          </div>

          <div className="hero-button">
           <a href={data.linkedinurl}>
           <div className="connect-button">
              <p>Connect⚡</p>
            </div>
           </a>
            <a href={data.githuburl}>
            <div className="github-button">
              <p>Star on Github 💫</p>
            </div>
            </a>
          </div>
        
      </div>

      <div className="core">
        <h3>The Core Tech-Stack</h3>
        <p className="core-detail">
          The Core tech Stack currently am working on
        </p>

        <div className="core-images">
          <div className='h-7 p-4 flex justify-center items-center bg-blend-hue rounded-lg' >
            <h1 className='opacity- text-blue-300 font-light'>-NextJs</h1>
          </div>
          <div className='h-7 p-4 flex justify-center items-center bg-blend-hue rounded-lg' >
            <h1 className='opacity- text-red-300 font-light'>-Typescipt</h1>
          </div>
          <div className='h-7 p-4 flex justify-center items-center bg-blend-hue rounded-lg' >
            <h1 className='opacity- text-green-300 font-light'>-Reactjs</h1>
          </div>
          <div className='h-7 p-4 flex justify-center items-center bg-blend-hue rounded-lg' >
            <h1 className='opacity- text-yellow-300 font-light'>-Mongodb</h1>
          </div>
          <div className='h-7 p-4 flex justify-center items-center bg-blend-hue rounded-lg' >
            <h1 className='opacity- text-teal-400 font-light'>-Flutter</h1>
          </div>
        </div>
      </div>
    </div>  
  </div>
  </>
  )
}

export default DarkpremHero
