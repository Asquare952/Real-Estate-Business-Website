"use client";

import Image from "next/image";
import { useState } from "react";
import NavBarData from "@/utils/navbarData";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "./ui/button";
import SideNav from "./SideNav";
const NavBar = () => {
  const [NavData, setNavData] = useState(NavBarData);
  const [Value, setValue] = useState(0);
  const [OpenSideNav, setOpenSideNav] = useState(false);
  const {} = NavData[Value];
  const handleSideNav = () => {
    setOpenSideNav(!OpenSideNav);
  };
  return (
    <header className="bg-greyShades-300 py-2">
      <section className="container flex justify-between items-center">
        {/* <div className="flex items-center justify-between"> */}
          <Link href="/" className="">
            <Image
              src="/Assets/Images/Logo-1.png"
              alt=""
              width={160}
              height={26}
            />
          </Link>
          {/* <BiMenuAltRight
            className="w-10 h-8 lg:hidden"
            onClick={handleSideNav}
          /> */}
        {/* </div> */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8">
            {NavData.map((item, index) => {
              return (
                <Link
                  key={item.id}
                  className={`text-18-medium nav-links-hover ${
                    index === Value && "active-nav-links"
                  }`}
                  onClick={() => setValue(index)}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="hidden lg:flex">
          <Button asChild className="shad-greyShades-primary-btn">
            <Link href="/contact" className="text-18-medium">
              Contact Us
            </Link>
          </Button>
        </div>
        <BiMenuAltRight
            className="w-10 h-8 lg:hidden"
            onClick={handleSideNav}
          />
      </section>
      <SideNav openSideBar={OpenSideNav} />
    </header>
  );
};

export default NavBar;
