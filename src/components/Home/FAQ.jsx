import React from "react";

const FAQ = () => {
  return (
    <section className="bg-[#f1f3f4] py-14">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b5b6a]">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="mt-8 space-y-3 text-left max-w-3xl mx-auto">
          <div className="collapse collapse-arrow border border-[#9ccad2] bg-[#e9f7f9] shadow-sm">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-sm sm:text-base font-semibold text-[#0b5b6a]">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              <p>
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day. Here's how it
                typically functions: A posture corrector works by providing
                support and gentle alignment to your shoulders.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 bg-white shadow-sm">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold text-[#0b5b6a]">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              <p>
                Yes. Our design is adjustable to fit a wide range of body types
                and can be used by most age groups for daily posture support.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 bg-white shadow-sm">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold text-[#0b5b6a]">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              <p>
                It helps promote proper alignment and reduce strain on your back
                when used consistently with healthy movement habits.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 bg-white shadow-sm">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold text-[#0b5b6a]">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              <p>
                Some models include smart alerts. If you choose a smart version,
                you'll receive gentle reminders when your posture needs
                correction.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 bg-white shadow-sm">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-sm sm:text-base font-semibold text-[#0b5b6a]">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              <p>
                You can subscribe with your email or phone number and we’ll send
                a notification as soon as it becomes available.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn rounded-full bg-[#cfe86b] text-[#0b3b43] border-0 hover:bg-[#b8d95f]">
            See More FAQ's
          </button>
          <div className="ml-2 w-9 h-9 rounded-full bg-[#1f2937] text-white flex items-center justify-center">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
