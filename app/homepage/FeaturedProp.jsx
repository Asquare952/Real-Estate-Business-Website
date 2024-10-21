"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./curouselStyles.css"
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // const { features } = Property;
  // const { id, image, title, desc, price, features } = Property;

  return (
    <>
      <section className="container flex flex-col gap-20">
        <div className="mb-3">
          <img src="/Assets/Images/Abstract-design-1.png" alt="" />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl lg:text-[38px]">
              Featured Properties
            </h3>
            <p className="font-medium text-[14px] md:text-base lg:text-lg">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <div>
            <Button className="bg-greyShades-300 text-white-200 font-medium text-lg rounded-[10px] border-2 border-greyShades-400 py-[20px] px-5">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>

        {/* Properties Card */}
        <div className="mt-4">
          <Slider {...settings}>
            {Property.map((property) => {
              const { id, image, title, desc, price } = property;
              return (
                <div
                  key={id}
                  className="bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 flex flex-col gap-8 space-y-1.5 p-6"
                >
                  <div>
                    <img src={image} alt="" className="w-full max-w-[432px] h-auto rounded-xl aspect-video object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3>{title}</h3>
                    <p>{desc}</p>
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
                      <span>Price</span>
                      <p>{price}</p>
                    </div>
                    <Button className="bg-purple-200">
                      View Property Details
                    </Button>
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
