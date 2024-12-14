"use client";

import { useState } from "react";
import Image from "next/image";
import Valuess from "./utils/ourValuesData";
const OurValues = () => {
  const [Values, setValues] = useState(Valuess);
  return (
    <section className="mt-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7">
      <div className="flex flex-col gap-4">
        <Image
          src="/Assets/Images/Abstract-design-1.png"
          alt="image"
          width={68}
          height={30}
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl lg:text-[38px] xl:text-[48px]">Our Values</h3>
          <p className="font-medium text-sm text-greyShades-900 lg:text-base lg:w-[413px] xl:text-lg xl:w-[517px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 rounded-xl border-[1px] border-greyShades-400 mt-3 p-[24px]">
        {Values.map((items) => {
          const { id, icon, head, para } = items;
          return (
            <div key={id} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="rounded-[52px] border-[1px] border-purple-200 p-5">
                  <Image src={icon} alt="image" width={23} height={22} className="" />
                </div>
                <h3>{head}</h3>
              </div>
              <p>{para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurValues;
