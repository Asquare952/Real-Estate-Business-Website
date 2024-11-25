"use client";

import { useState } from "react";
import HeroBox from "../../utils/heroBoxData";
const HeroBoxs = () => {
  const [Herobox, setHerobox] = useState(HeroBox);

  return (
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
  );
};
export default HeroBoxs;
