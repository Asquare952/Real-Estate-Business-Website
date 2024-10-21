"use client";

import { useState } from "react";
import NavBarData from "@/utils/navbarData";
import Link from "next/link";
import { Button } from "./ui/button";

const SideNav = ({ OpenSideNav }) => {
  const [NavData, setNavData] = useState(NavBarData);
  const [Value, setValue] = useState(0);
  const {} = NavData[Value];
  return (
    <aside
      className={
        OpenSideNav
          ? " fixed w-[250px] top-0 right-0 ease-in duration-500 h-screen pl-5 pt-5 z-50"
          : " fixed right-[-100%] top-0 ease-in duration-[850ms]"
      }
      style={{
        backgroundColor: "bg-greyShades-300",
      }}
    >
      <section className="flex flex-col justify-between">uinkjdenge</section>
    </aside>
  );
};

export default SideNav;
