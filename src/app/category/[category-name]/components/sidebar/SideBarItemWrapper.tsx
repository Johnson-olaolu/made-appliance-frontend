"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ISideBarItemWrapper {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}
const SideBarItemWrapper: React.FC<ISideBarItemWrapper> = (props) => {
  const { title, children, open = false } = props;
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef(null);
  const [isOpen, setIsOpen] = useState(open);
  const [ctx] = useState(gsap.context(() => {}));
  useLayoutEffect(() => {
    ctx.add("open", () => {
      gsap.to(iconRef.current, {
        rotate: -180,
        duration: 0.3,
      });
      gsap.to(bodyRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        onStart: () => setIsOpen(true),
      });
    });
    ctx.add("close", () => {
      gsap.to(bodyRef.current, {
        height: "0",
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsOpen(false),
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);
  const handleToggle = () => {
    if (!isOpen) {
      ctx.open();
    } else {
      ctx.close();
    }
  };
  return (
    <div className="border-b-2 border-[#AEAEAE1A]">
      <button
        className="header py-4 px-4 sm:px-0 flex w-full justify-between items-center dark:text-ma-white text-ma-grey hover:text-ma-light-blue"
        onClick={handleToggle}
      >
        <span className="font-semibold text-sm">{title}</span>
        <span ref={iconRef} className="">
          <FiChevronDown size={18} />
        </span>
      </button>
      <div ref={bodyRef} className={`body ${open ? "h-auto" : "h-0"}  overflow-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default SideBarItemWrapper;
