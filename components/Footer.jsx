import Link from "next/link";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { BsEnvelopePlus } from "react-icons/bs";
import * as FaIcon from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="container mt-12 flex flex-col">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <Image src="/Assets/Images/logo.png" width={48} height={48} />
            <p className="font-medium text-lg">Estatain</p>
          </div>
          <div className="relative">
            <BsEnvelopePlus className="absolute top-[15px] left-4" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className=" bg-greyShades-200 rounded-xl border-[1px] border-greyShades-400 py-[10px] pl-10 pr-14"
            />
            <FiSend className="absolute left-[230px] top-4 text-lg" />
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8">
            <li className="text-greyShades-900">Home</li>
            <li>
              <Link href="">Hero Section</Link>
            </li>
            <li>
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">Properties</Link>
            </li>
            <li>
              <Link href="">Testimonals</Link>
            </li>
            <li>
              <Link href="">FAQS</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8">
            <li className="text-greyShades-900">About Us</li>
            <li>
              <Link href="">Our Story</Link>
            </li>
            <li>
              <Link href="">Our Works</Link>
            </li>
            <li>
              <Link href="">How It Works</Link>
            </li>
            <li>
              <Link href="">Our Team</Link>
            </li>
            <li>
              <Link href="">Our Clients</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8">
            <li className="text-greyShades-900">Properties</li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="">Cartigories</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8">
            <li className="text-greyShades-900">Services</li>
            <li>
              <Link href="">Valuation Mastrey</Link>
            </li>
            <li>
              <Link href="">Strategic Marketing</Link>
            </li>
            <li>
              <Link href="">Negotiation Wizardry</Link>
            </li>
            <li>
              <Link href="">Closing Success</Link>
            </li>
            <li>
              <Link href="">Property Management</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8">
            <li className="text-greyShades-900">Contact Us</li>
            <li>
              <Link href="">Contact Form</Link>
            </li>
            <li>
              <Link href="">Our Offices</Link>
            </li>
          </ul>
        </div>
      </footer>
      <section className="bg-greyShades-300 py-4 ">
        <div className="container flex flex-col items-center gap-4 lg:flex-row-reverse lg:justify-between">
          <div className="flex items-center gap-3">
            <Link href='/' className="bg-greyShades-200 p-[14px] rounded-3xl text-white">
              <FaIcon.FaFacebookF  />
            </Link>
            <Link href='/' className="bg-greyShades-200 p-[14px] rounded-3xl text-white">
              <FaIcon.FaLinkedin />
            </Link>
            <Link href='/' className="bg-greyShades-200 p-[14px] rounded-3xl text-white">
              <FaXTwitter />
            </Link>
            <Link href='/' className="bg-greyShades-200 p-[14px] rounded-3xl text-white">
              <FaIcon.FaYoutube />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
