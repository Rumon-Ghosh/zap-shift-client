import React from "react";
import merchantBG from "../../assets/be-a-merchant-bg.png";
import locationMerchant from "../../assets/location-merchant.png";

const MerchantSatisfaction = () => {
  return (
    <section className="my-16 w-11/12 mx-auto">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b3b43] via-[#0a333a] to-[#072a2f] text-white">
        {/* Top background image */}
        <img
          src={merchantBG}
          alt=""
          className="absolute left-0 top-0 w-full pointer-events-none select-none opacity-80"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h3>
            <p className="mt-5 text-base sm:text-lg text-white/80">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift Courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn border-0 rounded-full bg-[#cfe86b] text-[#0b3b43] hover:bg-[#b8d95f]">
                Become a Merchant
              </button>
              <button className="btn btn-outline rounded-full border-[#cfe86b] text-[#cfe86b] hover:bg-[#cfe86b] hover:text-[#0b3b43]">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex justify-center lg:justify-end">
            <img
              src={locationMerchant}
              alt="Delivery illustration"
              className="w-full max-w-[360px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantSatisfaction;
