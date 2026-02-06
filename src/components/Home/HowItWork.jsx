import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const workArray = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    sub: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    title: "Cash On Delivery",
    sub: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    title: "Delivery Hub",
    sub: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    sub: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWork = () => {
  return (
    <div className="my-10 px-10">
      <h3 className="text-4xl font-bold mb-5">How It Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {workArray.map((work) => (
          <div
            key={work.id}
            className="bg-white p-5 md:p-10 rounded-md space-y-3 hover:shadow-lg duration-500"
          >
            <div className="text-3xl">
              <CiDeliveryTruck />
            </div>
            <h3 className="text-xl font-bold">{work.title}</h3>
            <p>{work.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
