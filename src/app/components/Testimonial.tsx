import { fetchTestimonials } from "@/services/homepage.service";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = async () => {
  const data = await fetchTestimonials();
  return (
    <div className="pt-16 pb-24">
      <div className="h-80 bg-[#012F6B] relative pt-16 sm:pt-20 ">
        <div className=" scale-75 sm:scale-100 h-32 w-32 bg-ma-light-blue rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <FaQuoteLeft size={72} className="text-ma-white" />
        </div>
        <p className="text-center text-ma-white text-lg sm:text-2xl font-bold">Hear What Our Customers Have to Say</p>
        <div className="mt-8 flex justify-center gap-10">
          {data?.map((testimonial, idx) => (
            <div key={idx} className={`w-56 bg-ma-white dark:bg-ma-black shadow-md ${idx} ${idx > 0 && "hidden sm:block"} `}>
              <div
                className="h-32 border-b-8 border-b-ma-text-primary relative "
                style={{
                  background: testimonial.testimonial_image ? `url("${testimonial.testimonial_image}")` : `url("/images/pageprofilepix.jpg")`,
                  backgroundSize: " 100% auto ",
                }}
              >
                {/* <Image width={220} height={120} alt="" src={"/images/image 38.png"} /> */}
                <div className="h-9 w-9 bg-ma-light-blue rounded-full absolute bottom-0 left-5 transform translate-y-1/2 flex items-center justify-center">
                  <FaQuoteLeft size={20} className="text-ma-white" />
                </div>
              </div>
              <div className=" p-5 h-40">
                <p className=" text-ma-text-secondary dark:text-ma-off-white text-xs font-medium h-20 overflow-y-auto">
                  {testimonial.testimonial_text}
                </p>
                <div className=" mt-4">
                  <p className="text-sm font-bold text-ma-text-secondary dark:text-ma-off-white leading-none">{testimonial.testimonial_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
