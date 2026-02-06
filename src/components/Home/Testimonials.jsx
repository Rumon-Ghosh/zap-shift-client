import React from "react";
import customerTop from "../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="my-20 w-11/12 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <img src={customerTop} alt="" />
        <h3 className="text-4xl font-bold text-center">
          What our customers are saying
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        centeredSlides
        grabCursor
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="py-10"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
