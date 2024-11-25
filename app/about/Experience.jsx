"use client";

import Image from "next/image";
import { useState } from "react";
import OurExperiences from "./utils/experienceData";
const Experience = () => {
    const [Experiences, setExperiences] = useState(OurExperiences)
  return (
    <>
      <section className="flex flex-col gap-6 mt-10">
      <div className="mb-1 mt-4">
          <Image
            src="/Assets/Images/Abstract-design-1.png"
            alt=""
            width={68}
            height={30}
          />
          </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl lg:text-[38px]">
              Navigating the Estatein Experience
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-xl text-greyShades-900 xl:">
              At Estatein, we've designed a straightforward process to help you
              find and purchase your dream property with ease. Here's a
              step-by-step guide to how it all works.
            </p>
          </div>
        </div>


        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Experiences.map((items) => {
            const { id, title, desc } = items;
            return (
              <div
                key={id}
                className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
              >
                <div className="flex flex-col justify-center gap-5 pt-5">
                  <h3 className="font-semibold text-xl xl:text-[26px]">{title}</h3>
                  <p className="font-medium text-lg  text-greyShades-900">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Experience;
