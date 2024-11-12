import React from 'react';
import Navbar from '@/components/navbar';
import Dream from '@/components/dream';
import Hero from '@/components/hero';
import Line from '@/components/line';
import Footer from '@/components/footer';



const HomePage = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
      <Dream/>
      <Line/>
      <Footer/>
     
      
    </div>
  );
};

export default HomePage;
