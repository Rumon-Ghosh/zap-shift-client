import React from "react";
import { Carousel } from "react-responsive-carousel";
// Crucial: Import the carousel styles!
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full my-8 md:my-15">
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false} 
        interval={3000} 
      >
        <div className="relative">
          <img className="w-full h-auto object-cover" src={banner1} alt="Banner 1" />
          <div className="flex gap-1 absolute bottom-7 left-3">
            <Link to="/" className="btn btn-primary text-black">Track Your Parcel</Link>
            <Link to="/" className="btn btn-outline">Be Rider</Link>
          </div>
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={banner3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;