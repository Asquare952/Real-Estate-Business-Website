"use client";

import { useState } from "react";
import Image from "next/image";
import Teams from "./utils/ourTeamsData";
import { FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const TheTeam = () => {
  const [Team, setTeam] = useState(Teams);

  return (
    <section className="lg:mt-28 flex flex-col gap-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl lg:text-[38px]">
            Meet the Estatein Team
          </h3>
          <p className="font-medium text-[14px] md:text-base lg:text-xl text-greyShades-900 xl:">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:justify-between">
        {Team.map((items) => {
          const { id, images, name, role, path } = items;
          return (
            <div
              key={id}
              className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
            >
              <div className="relative">
                <Image src={images} alt="" width={316} height={200} className="rounded-xl aspect-video object-cover"/>
                <div className="absolute left-[100px] top-[195px] bg-purple-200 py-[14px] px-[26px] rounded-[43px]">
                  <Link href={path}>
                    <FaXTwitter className="text-lg" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 pt-5">
                <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl">{name}</h3>
                <p className="font-medium text-sm md:text-base lg:text-lg text-greyShades-900">
                  {role}
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-[220px] top-2 bg-purple-200 p-[10px] rounded-3xl cursor-pointer">
                  <FiSend className="text-lg " />
                </div>
                <input
                  type="text"
                  placeholder="Say Hello 👋"
                  className="w-full border-none outline-none bg-greyShades-300 rounded-[100px] border-[1px] border-greyShades-400 py-[14px] pl-6 pr-[14px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TheTeam;
