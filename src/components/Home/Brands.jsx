import React from "react";
import Marquee from "react-fast-marquee";

// Import your assets
import amazonBrand from "../../assets/brands/amazon.png";
import amazonVentor from "../../assets/brands/amazon_vector.png";
import casioBrand from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randStart from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import starPeople from "../../assets/brands/start_people.png";

const Brands = () => {
  const brandLogos = [
    starPeople, amazonBrand, casioBrand, randStart, 
    moonstar, amazonVentor, star
  ];

  return (
    <div className="my-10 md:my-20">
      <h3 className="text-4xl font-bold text-center mb-10">
        We've helped thousands of sales teams
      </h3>

      <Marquee 
        speed={50} 
        pauseOnHover={true} 
        gradient={true}      
        gradientWidth={100} 
      >
        {brandLogos.map((logo, index) => (
          <div key={index} className="mx-10"> 
            <img 
              src={logo} 
              alt={`brand-${index}`} 
              className="w-40 h-auto grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;