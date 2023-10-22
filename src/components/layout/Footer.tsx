import { tempMenu } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" py-14 bg-ma-black">
      <div className=" px-4 sm:px-0 max-w-6xl flex mx-auto flex-col sm:flex-row gap-x-20 gap-y-10">
        <div className="flex-shrink-0 space-y-6">
          <Image width={288} height={56} alt="logo" src="/images/logo.png" />
          <div className="gap-x-3 flex text-ma-text-primary">
            <a href="#" className="">
              <FaFacebookF />
            </a>
            <a href="#" className="">
              <FaTelegram />
            </a>
            <a href="#" className="">
              <FaWhatsapp />
            </a>
            <a href="#" className="">
              <FaTwitter />
            </a>
            <a href="#" className="">
              <FaPinterest />
            </a>
            <a href="#" className="">
              <ImInstagram />
            </a>
          </div>
        </div>
        <nav className=" flex-grow justify-between flex gap-12 flex-col sm:flex-row sm:flex-wrap">
          {tempMenu.map((menuItem, idx) => (
            <div key={idx} className="">
              <h4 className="footer-menu-title">{menuItem.title}</h4>
              <ul className="mt-3 space-y-2">
                {menuItem.items.map((item, idx) => (
                  <li className="" key={idx}>
                    <a href="#" className="text-xs text-ma-text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="">
            <h4 className="footer-menu-title">About the store</h4>
            <div className="mt-3 ">
              <p className="text-xs text-ma-text-primary">Selling the best products with the best prices since 2007</p>
              <Image width={192} height={56} alt="logo" src="/images/Shop Image.png" className="my-4" />
              <div className=" text-xs text-ma-text-primary space-y-4">
                {/* <p className=" flex items-center gap-1 ">
                  <FaLocationDot />
                  <span>2945 Walnut Hill ln, Dallas, TX 75229</span>
                </p> */}
                <p className="flex items-center gap-1 ">
                  <FaLocationDot />
                  <span>14655 Midway Rd, Addison TX 75001</span>
                </p>
                <p className="flex items-center gap-1 ">
                  <MdPhoneIphone />
                  <span>Phone: (940) 206-9113</span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
