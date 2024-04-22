import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-banner h-[550px] bg-center bg-cover bg-no-repeat flex items-center justify-center flex-row-reverse px-20">
      <div className="w-full mx-auto *:mb-5">
        <h1 className="font-playfair-display text-2xl text-white">
          We’ve got your morning covered with
        </h1>
        <span className="text-9xl font-clicker-script text-white">Coffee</span>
        <p className="text-white font-raleway leading-[30px] w-[40%] mt-5">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="bg-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
