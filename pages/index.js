import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Navbar  from "../components/Navbar";
import HeroBanner from '../components/HeroBanner';
import PortfolioBanner from '../components/PortfolioBanner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
     <Navbar/>
     <HeroBanner/>
     <PortfolioBanner/>
     
     </div>
     
     
     
     
     
     
     
     

    
     

    </>
  )
}
