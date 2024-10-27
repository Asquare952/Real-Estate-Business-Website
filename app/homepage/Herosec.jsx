"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import HeroBox from "./utils/heroBoxData";
import SubHeroBox from "./utils/subHeroBoxData";
const Herosec = () => {
  const [Herobox, setHerobox] = useState(HeroBox);
  const [SubHerobox, setSubHerobox] = useState(SubHeroBox);
  return (
    <>
      <section className="container flex flex-col lg:items-center mt-9 lg:mt-0 lg:flex-row-reverse">
        <div>
          <Image
            src="/Assets/Images/Home-hero-image.png"
            alt=""
            width={432}
            height={318}
            className="heroimg xl:w-full"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 mt-4">
            <h4 className="w-[300px] text-2xl lg:texts-60-semibold">
              Discover Your Dream Property with Estatein
            </h4>
            <p className="w-[300px] text-[18px] text-greyShades-900 font-medium lg:w-[758px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <Button className="text-white-200 font-medium text-lg rounded-[10px] border-2 border-greyShades-400 py-[18px] px-6 cursor-pointer">
              Learn More
            </Button>
            <Button className="bg-purple-200 font-medium text-lg text-white-200 rounded-[10px]  py-[18px] px-6 cursor-pointer">
              Browse Properties
            </Button>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            {/* <div className="flex flex-col text-center lg:text-start gap-1 bg-greyShades-300 rounded-xl border-2 border-greyShades-400 py-4 px-6">
      <h3 className="font-bold text-[24px] text-white-200">200+</h3>
      <p className="font-medium text-[18px] text-greyShades-900">
        Happy Customers
      </p>
    </div>
    <div className="flex flex-col text-center lg:text-start gap-1 bg-greyShades-300 rounded-xl border-2 border-greyShades-400 py-4 px-6">
      <h3 className="font-bold text-[24px] text-white-200">10k+</h3>
      <p className="font-medium text-[18px] text-greyShades-900">
        Properties For Clients
      </p>
    </div>
    <div className="flex flex-col col-span-2 text-center lg:text-start gap-1 bg-greyShades-300 rounded-xl border-2 border-greyShades-400 py-4 px-6">
      <h3 className="font-bold text-[24px] text-white-200">16+</h3>
      <p className="font-medium text-[18px] text-greyShades-900">
        Years of Experience
      </p>
    </div> */}
            {Herobox.map((item) => {
              const { id, head, para } = item;
              return (
                <div
                  key={id}
                  className="flex flex-col  text-center lg:text-start gap-1 bg-greyShades-300 rounded-xl border-2 border-greyShades-400 py-4 px-6"
                >
                  <h3 className="font-bold text-[24px] text-white-200 lg:texts-40-bold">
                    {head}
                  </h3>
                  <p className="font-medium text-[18px]  text-greyShades-900">
                    {para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub hero sec */}
      <section className="mt-4 Subcontainer bg-greyShades-200 rounded-xl border-[3px] border-greyShades-400 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SubHerobox.map((items) => {
            const { id, icon1, para } = items;
            return (
              <div
                key={id}
                className="flex flex-col justify-center  items-center text-center gap-3 bg-greyShades-300 rounded-xl border-[1px] border-greyShades-400 py-3"
              >
                <Image src={icon1} alt="" width={300} height={50} className="w-[82px]"/>
                <p className="font-semibold text-[14px] md:text-[18px]">{para}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Herosec;
