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
import Testimonals from "./utils/testimonalData";
const Testimonal = () => {
  const [Testimonal, setTestimonal] = useState(Testimonals);
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
              What Our Clients Say
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-lg text-greyShades-900 lg:w-[">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          <div>
            <Button className="bg-greyShades-300 text-white-200 font-medium text-lg rounded-[10px] border-2 border-greyShades-400 py-[20px] px-5">
              <Link href="/properties">View All Testimonals</Link>
            </Button>
          </div>
        </div>

        {/* Properties Card */}
        <div className="mt-4 relative">
          <Slider {...settings}>
            {Testimonal.map((testimonial) => {
              const { id, image, title, desc, name,country } = testimonial;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
                >
                  <div className="flex justify-between flex-wrap pt-5">
                    {/* {testimonial.rating.map} */}
                    {testimonial.rating.map((ratings, index) => {
                      const { icon } = ratings;
                      return (
                        <div
                          key={index}
                          className="bg-greyShades-300 rounded-3xl p-2 "
                        >
                          <Image src={icon} alt="" width={24} height={24} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2 pt-5">
                    <h3 className="font-semibold lg:text-2xl">{title}</h3>
                    <p className="font-medium text-lg w-[412]">{desc}</p>
                  </div>

                  <div className="flex gap-2 items-center pt-4">
                    <div>
                      <Image src={image} alt="" width={60} height={60}/>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-xl">{name}</span>
                      <p className="font-medium text-lg text-greyShades-900">{country}</p>
                    </div>
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

export default Testimonal;
