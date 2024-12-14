"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "@/components/customeSliders/SliderArrow";
import { PrevArrow } from "@/components/customeSliders/SliderArrow";
import { useState } from "react";
import Clients from "./utils/valuedClientsData";
import { RxDashboard } from "react-icons/rx";
import { RiFlashlightLine } from "react-icons/ri";
const ValuedClients = () => {
  const [Client, setClient] = useState(Clients);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="container flex flex-col gap-20 pb-6">
        <div className="flex flex-col gap-3">
          <Image
            src="/Assets/Images/Abstract-design-1.png"
            alt=""
            width={68}
            height={30}
          />
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl lg:text-[38px]">
              Our Valued Clients
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-lg text-greyShades-900">
              At Estatein, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we&apos;ve had the pleasure of serving
            </p>
          </div>
        </div>

        {/* Properties Card */}
        <div className="mt-4 ">
          <Slider {...settings} className="relative">
            {Client.map((item) => {
              const {
                id,
                clientName,
                year,
                domain,
                catigory,
                title,
                decs,
                path,
              } = item;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-[40px] p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm lg:text-base xl:text-lg text-greyShades-900">
                        {year}
                      </p>
                      <h3 className="font-semibold text-xl lg:text-2xl xl:text-3xl text-white-200">
                        {clientName}
                      </h3>
                    </div>
                    <button className=" bg-greyShades-300 text-white-200 font-medium text-sm rounded-[8px] border-2 border-greyShades-400 py-[14px] px-5">
                      <Link href={path}>Visit Website</Link>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <p className="text-greyShades-900 text-xs lg:text-sm flex items-center gap-2">
                        <RxDashboard />
                        <span>Domain</span>
                      </p>
                      <p className="font-medium text-sm lg:text-base xl:text-xl">
                        {domain}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-greyShades-900 text-xs lg:text-sm flex items-center gap-2">
                        <RiFlashlightLine />
                        <span>Cartigory</span>
                      </p>
                      <p className="font-medium text-sm lg:text-base xl:text-xl">
                        {catigory}
                      </p>
                    </div>
                  </div>
                  <div className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-3 mt-6 p-6">
                    <h4 className="text-greyShades-900 font-medium text-sm lg:text-base xl:text-lg">
                      {title}
                    </h4>
                    <p className="font-medium text-sm lg:text-base xl:text-lg xl:w-[570px]">
                      {decs}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ValuedClients;
