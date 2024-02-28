
import { Button } from "@/components/ui/button";
import './Main.css'
import connectToDatabase from "@/lib/database/mongodb";
import Hero from "@/components/shared/home/Hero";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { createAboutusingAi } from "@/lib/actions/openai.action";
export default async function Home() {

  const db = ()=>{
    connectToDatabase();
  }

  const apidata = await createAboutusingAi();


  
  return (
    <>
    <Header/>
    <Hero/>
    <Footer/>
    </>
  );
}
