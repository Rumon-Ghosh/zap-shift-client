import React from "react";
import liveTracking from "../../assets/live-tracking.png";
import safeDelivery from "../../assets/safe-delivery.png";
import bigDelivery from "../../assets/big-deliveryman.png";

const WhyUs = () => {
  const items = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      desc:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: liveTracking,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      desc:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeDelivery,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      desc:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: bigDelivery,
    },
  ];

  return (
    <section className="bg-[#f2f4f6] py-12">
      <div className="w-11/12 mx-auto">
        <div className="border-t border-dashed border-[#9fb7bf]" />

        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 bg-white rounded-2xl px-6 py-6 sm:px-10 sm:py-8 shadow-sm"
            >
              <div className="flex items-center justify-center sm:w-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 sm:w-32 h-auto object-contain"
                />
              </div>

              <div className="hidden sm:block border-l-2 border-dashed border-[#9fb7bf]" />

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#0b5b6a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-dashed border-[#9fb7bf]" />
      </div>
    </section>
  );
};

export default WhyUs;
