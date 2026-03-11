import React from 'react';
import { FaTruckFast, FaGlobe, FaBoxOpen, FaClock, FaShieldHalved, FaHandshakeSimple, FaArrowsRotate, FaWarehouse, FaBolt } from "react-icons/fa6";
import { Link } from 'react-router';

const Services = () => {
  const mainServices = [
    {
      id: 1,
      icon: <FaBolt className="text-4xl" />,
      title: "Express Delivery",
      description: "Need it there yesterday? Our express service guarantees delivery within 4-6 hours within city limits. Priority handling from door-to-door.",
      features: ["Same-day delivery", "Priority handling", "Real-time tracking"]
    },
    {
      id: 2,
      icon: <FaGlobe className="text-4xl" />,
      title: "Nationwide Coverage",
      description: "Our extensive network covers every corner of the country. From the busiest cities to the most remote villages, we've got you covered.",
      features: ["64 Districts", "Home delivery", "Safe transport"]
    },
    {
      id: 3,
      icon: <FaBoxOpen className="text-4xl" />,
      title: "Fulfillment Solutions",
      description: "Streamline your e-commerce business with our end-to-end fulfillment. We handle storage, packing, and shipping so you can focus on growth.",
      features: ["Inventory management", "Professional packing", "Order processing"]
    },
    {
      id: 4,
      icon: <FaHandshakeSimple className="text-4xl" />,
      title: "Cash on Delivery",
      description: "Build trust with your customers by offering Cash on Delivery. We ensure secure payment collection and lightning-fast remit to your account.",
      features: ["Secure payments", "Fast remittance", "Automated tracking"]
    },
    {
      id: 5,
      icon: <FaWarehouse className="text-4xl" />,
      title: "Corporate Logistics",
      description: "Tailored logistics solutions for businesses. Bulk shipments, scheduled pickups, and dedicated support for your supply chain needs.",
      features: ["Volume discounts", "Contract logistics", "Dedicated manager"]
    },
    {
      id: 6,
      icon: <FaArrowsRotate className="text-4xl" />,
      title: "Reverse Logistics",
      description: "Hassle-free returns for your customers. Our reverse logistics service makes exchanges and returns smooth for both you and your buyers.",
      features: ["Easy returns", "Quality checks", "Customer support"]
    }
  ];

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-white py-20 px-5 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-0 -left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Our <span className="text-primary italic">Signature</span> Services
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            From lightning-fast express deliveries to comprehensive warehousing solutions,
            we provide the logistics backbone your business deserves.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/send-parcel" className="btn btn-primary btn-lg rounded-full font-bold px-8 text-black">Send a Parcel</Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary btn-lg rounded-full px-8">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-5 w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">How can we help you?</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div key={service.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-base-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-base-200 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-secondary/70">
                      <FaShieldHalved className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-2 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Markers / Stats */}
      <section className="bg-white py-16 border-y border-base-300">
        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">99.9%</div>
            <p className="text-secondary/60 font-bold tracking-widest text-xs uppercase">Safe Delivery</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">24/7</div>
            <p className="text-secondary/60 font-bold tracking-widest text-xs uppercase">Active Support</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">500k+</div>
            <p className="text-secondary/60 font-bold tracking-widest text-xs uppercase">Happy Users</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">10min</div>
            <p className="text-secondary/60 font-bold tracking-widest text-xs uppercase">Avg. Response</p>
          </div>
        </div>
      </section>

      {/* Work Process section */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Our Simple Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Sending cross-country has never been easier. Just three simple steps to get your parcel moving.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
            {[
              { step: "01", title: "Book a Pickup", desc: "Request a pickup through our app or website. We'll be at your doorstep in no time.", icon: <FaBoxOpen /> },
              { step: "02", title: "Quick Processing", desc: "Your parcel is weighed, labeled and sorted in our nearest hub within hours.", icon: <FaTruckFast /> },
              { step: "03", title: "Safe Delivery", desc: "Get real-time updates as your parcel makes its way to the destination safely.", icon: <FaHandshakeSimple /> }
            ].map((item, idx) => (
              <div key={idx} className="flex-1 relative p-4 shadow-lg rounded-2xl bg-white border border-base-300">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-6xl font-black text-primary">{item.step}</span>
                  <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-2xl text-secondary">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-secondary">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-secondary text-white py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Service FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What is your coverage area?", a: "We provide nationwide delivery across all 64 districts of Bangladesh, including remote villages." },
              { q: "How long does express delivery take?", a: "Our express delivery typically takes 4-6 hours from the time of pickup for intra-city shipments." },
              { q: "Is insurance included for expensive items?", a: "Yes, we offer standard insurance coverage. For higher-value items, you can opt for our Premium Shield protection." },
              { q: "How can I track my parcel?", a: "You can track your parcel in real-time through our dashboard or mobile app using the unique tracking ID." }
            ].map((faq, idx) => (
              <div key={idx} className="collapse collapse-plus bg-white/5 border border-white/10">
                <input type="radio" name="my-accordion-3" defaultChecked={idx === 0} />
                <div className="collapse-title text-xl font-bold">
                  {faq.q}
                </div>
                <div className="collapse-content text-white/70">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-5 bg-primary overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none">
          <FaTruckFast className="text-black/5 text-[40rem] -translate-x-1/2 opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6">Ready to Ship with ZapShift?</h2>
          <p className="text-xl text-secondary/80 font-medium mb-10 max-w-2xl mx-auto">
            Join 5,000+ businesses who trust ZapShift for their daily logistics.
            Fast, secure, and reliable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn btn-secondary btn-lg rounded-xl px-12 border-none">Get Started Now</Link>
            <button className="btn btn-ghost btn-lg text-secondary font-bold">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;