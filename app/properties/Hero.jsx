import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-greyShades-400 py-[150px]">
      <div className="container flex flex-col gap-8">
        {/* <div className=""> */}
          <h3 className="w-[358px] font-semibold text-[24px]">Find Your Dream Property</h3>
          <p className="font-medium text-sm text-greyShades-900 md:w-[490px] lg:w-[690px] xl:w-[979px] lg:text-lg xl:text-[18px]">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;