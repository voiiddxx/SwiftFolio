
import { Button } from "@/components/ui/button";
import './Main.css'
import connectToDatabase from "@/lib/database/mongodb";
import Hero from "@/components/shared/home/Hero";
export default function Home() {

  const db = ()=>{
    connectToDatabase();
  }
  return (
    <>
    <Hero/>
    </>
  );
}
