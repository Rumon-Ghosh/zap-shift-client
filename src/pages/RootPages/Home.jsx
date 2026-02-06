import React from 'react';
import Banner from '../../components/Home/Banner';
import HowItWork from '../../components/Home/HowItWork';
import OurServices from '../../components/Home/OurServices';
import Brands from '../../components/Home/Brands';
import MerchantSatisfaction from '../../components/Home/MerchantSatisfaction';
import Testimonials from '../../components/Home/Testimonials';
import WhyUs from '../../components/Home/WhyUs';
import FAQ from '../../components/Home/FAQ';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurServices></OurServices>
      <Brands></Brands>
      <WhyUs></WhyUs>
      <MerchantSatisfaction></MerchantSatisfaction>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
