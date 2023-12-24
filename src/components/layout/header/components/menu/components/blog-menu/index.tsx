import Link from "next/link";
import React from "react";

const BlogMenu = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{ border: "1px solid rgb(0 0 0 / 0.02)" }}
      className=" min-w-[280px] bg-ma-white dark:bg-ma-dark dark:shadow-ma-white py-8  shadow-lg absolute left-0 top-0 transform translate-y-10 hidden z-10"
    >
      <ul className=" space-y-4 dark:text-ma-primary-light1">
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium  leading-6 hover:text-ma-blue capitalize">
            Menu Item 1
          </Link>
        </li>
        <li className="">
          <Link href={"#"} className=" px-8 py-1 font-medium leading-6 hover:text-ma-blue capitalize">
            Menu Item 2
          </Link>
        </li>
      </ul>
    </div>
  );
});

BlogMenu.displayName = "BlogMenu";

export default BlogMenu;
