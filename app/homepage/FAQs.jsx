"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "@/components/customeSliders/SliderArrow";
import { PrevArrow } from "@/components/customeSliders/SliderArrow";
import { useState } from "react";
import FAQ from "./utils/faqsData";
const FAQs = () => {
  const [FAQs, setFAQs] = useState(FAQ);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  // const { features } = Property;
  // const { id, image, title, desc, price, features } = Property;

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
              Frequently Asked Questions
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-lg text-greyShades-900">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div>
            <Button className="bg-greyShades-300 text-white-200 font-medium text-lg rounded-[10px] border-2 border-greyShades-400 py-[20px] px-5">
              <Link href="/properties">View All FAQs</Link>
            </Button>
          </div>
        </div>

        {/* Properties Card */}
        <div className="mt-4 relative">
          <Slider {...settings}>
            {FAQs.map((faqs) => {
              const { id, title, desc } = faqs;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
                >
                  <h3 className="font-semibold text-2xl">{title}</h3>
                  <p className="font-medium text-lg text-greyShades-900">{desc}</p>

                  <Button className="bg-greyShades-300 text-white-200 font-medium text-lg rounded-[10px] border-2 border-greyShades-400 py-[20px] px-5">
                    Read More
                  </Button>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FAQs;
