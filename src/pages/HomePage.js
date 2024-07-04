import React from 'react'
import { 
  Features,
  Faq,
  HeroSection,
} from '../components/Main';


const HomePage = () => {
  return (
    <div className="text-white">
      <HeroSection/>
      <Features />
      <Faq />
    </div>
  );
}


export default HomePage
