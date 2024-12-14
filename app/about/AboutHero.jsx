'use client'

import Image from "next/image";
import HeroBoxs from "@/components/heroBox/HeroBox";
const Hero = () => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-around lg:items-center lg:mt-14 ">
      <div className="mt-4">
        <Image
          src="/Assets/Images/about us hero img 2.png"
          alt="about image"
          width={755}
          height={300}
          className="lg:h-[570px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <Image
          src="/Assets/Images/Abstract-design-1.png"
          alt="image"
          width={68}
          height={30}
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl lg:text-[38px] xl:text-5xl">Our Journey</h3>
          <p className="font-medium text-sm text-greyShades-900 lg:text-base lg:w-[610px] xl:text-lg xl:w-[755px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we&apos;ve
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
        </div>
        <HeroBoxs/>
      </div>
    </section>
  );
};

export default Hero;
