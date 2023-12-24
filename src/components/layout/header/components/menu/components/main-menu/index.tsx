import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainMenu = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{ border: "1px solid rgb(0 0 0 / 0.02)" }}
      className=" max-w-[95%] xl:max-w-6xl w-full bg-ma-white dark:bg-ma-dark dark:shadow-ma-white p-8  shadow-lg absolute top-0 left-1/2 -translate-x-1/2 transform translate-y-32 z-10 hidden"
    >
      <div className=" grid grid-cols-4">
        <div className="">
          <Link href={"#"} className=" text-ma-primary2 dark:text-ma-white font-bold mb-5 block">
            Smart Phones
          </Link>
          <ul className=" space-y-4 dark:text-ma-primary-light1">
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 1
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 2
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 3
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 4
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 5
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 6
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 7
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link href={"#"} className=" text-ma-primary2  dark:text-ma-white  font-bold mb-5 block">
            Headphones
          </Link>
          <ul className=" space-y-4 ">
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 1
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 2
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 3
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 4
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 5
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 6
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 7
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link href={"#"} className=" text-ma-primary2 dark:text-ma-white  font-bold mb-5 block">
            Apple Headphones
          </Link>
          <ul className=" space-y-4">
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 1
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 2
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 3
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 4
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 5
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 6
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" text-ma-primary-light1 leading-none hover:text-ma-blue capitalize">
                Menu Item 7
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link href={"#"} className=" text-ma-primary2 dark:text-ma-white  font-bold mb-5 block">
            Selected
          </Link>
          <div className=" flex flex-col items-center gap-4">
            <Image src={"/images/Refrigerator-Transparent.png"} height={220} width={200} alt="" />
            <div className=" flex flex-col items-center">
              <p className="">Drou watch ultra</p>
              <p className="flex items-center  gap-3 text-xs">
                <span className=" font-bold">$70.00</span>
                <span className=" text-ma-primary-light1 line-through">$85.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MainMenu.displayName = "MainMenu";

export default MainMenu;
