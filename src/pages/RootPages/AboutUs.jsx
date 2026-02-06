import React from "react";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl font-bold">About Us</h2>
      <p className="text-lg my-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Story"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-3">
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Mission"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-3">
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Success"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-3">
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
          <p className="text-lg font-semibold">
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands. Whether it's a personal
            gift or a time-sensitive business delivery, we ensure it reaches its
            destination — on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
