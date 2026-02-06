import React from 'react';
import serviceIMG from "../../assets/service.png"

const services = [
  {
    id: 1,
    service: "Express  & Standard Delivery",
    para: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
  },
  {
    id: 2,
    service: "Nationwide Delivery",
    para: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours." 
  },
  {
    id: 3,
    service: "Fulfillment Solution",
    para: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
  },
  {
    id: 4,
    service: "Cash on Home Delivery",
    para: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
  },
  {
    id: 5,
    service: "Corporate Service / Contract In Logistics",
    para: "Customized corporate services which includes warehouse and inventory management support."
  },
  {
    id: 6,
    service: "Parcel Return",
    para: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
  }
]

const OurServices = () => {
  return (
    <div className='bg-secondary text-white p-5 md:p-10 my-10 mt-15 w-11/12 mx-auto rounded-xl'>
      <h2 className='text-5xl font-bold text-center mb-3'>Our Services</h2>
      <p className='text-center max-w-180 mx-auto mb-10 test-lg'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
        {
          services.map(s => (
            <div key={s.id} className='space-y-3 bg-white p-5 rounded-md text-black hover:bg-primary hover:text-black duration-500'>
              <img className='inline-block bg-base-300 p-4 rounded-full' src={serviceIMG} alt="" />
              <h4 className='text-lg font-bold'>{ s.service}</h4>
              <p>{ s.para}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OurServices;