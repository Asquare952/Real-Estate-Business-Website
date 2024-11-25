"use client";

import { useState } from "react";
import Image from "next/image";
import OurAchievements from "./utils/ourAchievement";
const Achievement = () => {
  const [Achievements, setAchievements] = useState(OurAchievements);

  return (
    <>
      <section className="container flex flex-col gap-4 mt-10">
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
              Our Achievements
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-xl text-greyShades-900 xl:">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-4 flex flex-col gap-8 lg:flex-row">
          {Achievements.map((items) => {
            const { id, title, desc } = items;
            return (
              <div
                key={id}
                className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
              >
                <div className="flex flex-col gap-2 pt-5">
                  <h3 className="font-semibold text-xl xl:text-3xl">{title}</h3>
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

export default Achievement;
