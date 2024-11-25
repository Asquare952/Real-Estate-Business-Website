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
      <section className="container flex flex-col gap-4">
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
              Our Valued Clients
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-lg text-greyShades-900">
              At Estatein, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we've had the pleasure of serving
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
                desc,
                path,
              } = item;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <p>{year}</p>
                      <h3>{clientName}</h3>
                    </div>
                    <button><Link href={path}>Visit Website</Link></button>
                  </div>
                  <div>
                    
                  </div>
                  <div></div>
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
