"use client";

// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "@/components/customeSliders/SliderArrow";
import { PrevArrow } from "@/components/customeSliders/SliderArrow";
import { useState } from "react";
import Properties from "@/utils/propertiesData";
const FeaturedProp = () => {
  const [Property, setProperty] = useState(Properties);
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
      <section className="container flex flex-col gap-4">
        <div className="mb-1 mt-4">
          <Image src="/Assets/Images/Abstract-design-1.png" alt="" width={68} height={30}/>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl lg:text-[38px]">
              Featured Properties
            </h3>
            <p className="w-[1200px] font-medium text-[14px] md:text-base lg:text-lg text-greyShades-900">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click &quot;View Details&quot; for more
              information.
            </p>
          </div>
          <div>
            <button className="bg-greyShades-300  rounded-[10px] border-2 border-greyShades-400 py-[18px] px-3">
              <Link href="/properties" className="w-36 text-white-200 font-medium text-sm">View All Properties</Link>
            </button>
          </div>
        </div>

        {/* Properties Card */}
        <div className="mt-4 ">
          <Slider {...settings} className="relative">
            {Property.map((property) => {
              const { id, image, title, desc, price } = property;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
                >
                  <div>
                    <Image src={image} alt="" width={432} height={318} className="w-full max-w-[432px] h-auto rounded-xl aspect-video object-cover" />
                  </div>
                  <div className="flex flex-col gap-2 pt-5">
                    <h3 className="font-semibold text-2xl">{title}</h3>
                    <p className="font-medium text-lg text-greyShades-900">{desc}</p>
                  </div>
                  <div className="flex justify-between flex-wrap pt-5">
                    {property.features.map((feature, index) => {
                      const { icon, text } = feature;
                      return (
                        <div
                          key={index}
                          className="bg-greyShades-300 rounded-3xl flex items-center py-2 px-[14px] gap-1"
                        >
                          <span>{icon}</span>
                          <span>{text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className=" flex justify-between gap-1 items-center pt-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-lg text-greyShades-900">Price</span>
                      <p className="font-semibold text-2xl">{price}</p>
                    </div>
                    <button className="bg-purple-200 rounded-[10px] py-[18px] px-3">
                      View Property Details
                    </button>
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

export default FeaturedProp;
