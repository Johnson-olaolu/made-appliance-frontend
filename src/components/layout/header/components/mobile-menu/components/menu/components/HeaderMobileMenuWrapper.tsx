import gsap from "gsap";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { GoPlus, GoHorizontalRule } from "react-icons/go";

interface IHeaderMobileMenuWrapper {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  isSubMenu?: boolean;
}
const HeaderMobileMenuWrapper: React.FC<IHeaderMobileMenuWrapper> = (props) => {
  const { title, children, open = false, isSubMenu = false } = props;
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef(null);
  const [isOpen, setIsOpen] = useState(open);
  const [ctx] = useState(gsap.context(() => {}));

  useLayoutEffect(() => {
    ctx.add("open", () => {
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
        onStart: () => setIsOpen(false),
      });
    });
    return () => ctx.revert();
  }, [ctx]);

  const handleToggle = () => {
    if (!isOpen) {
      ctx.open();
    } else {
      ctx.close();
    }
  };
  return (
    <div className="text-ma-white">
      <p className={` ${isSubMenu ? "text-sm" : "font-semibold"}  py-3  gap-5 flex w-full justify-between items-center `}>
        <Link href={"#"} className={` flex-grow ${isOpen ? " opacity-75" : ""} `}>
          {title}
        </Link>
        <span role="button" ref={iconRef} className=" flex-shrink-0" onClick={handleToggle}>
          {isOpen ? <GoHorizontalRule size={22} /> : <GoPlus size={22} />}
        </span>
      </p>
      <div ref={bodyRef} className={`body ${open ? "h-auto" : "h-0"}  overflow-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default HeaderMobileMenuWrapper;
