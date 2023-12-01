import { ICategory } from "@/services/types";
import { escapeHtml } from "@/utils/misc";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface IProductBreadCrumbs {
  categories: ICategory[];
  title: string;
}

const ProductBreadcrumbs: React.FC<IProductBreadCrumbs> = (props) => {
  const { categories, title } = props;
  const parent = categories.find((c) => c.parent === 0);
  return (
    <ul className=" flex items-center text-sm py-4  flex-wrap">
      <li className="flex items-center ">
        <Link href="/" className=" text-ma-light-blue shrink-0">
          Home
        </Link>
        <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
      </li>
      <li className="flex items-center shrink-0 ">
        <Link href={`/category/${parent?.slug}`} className=" text-ma-light-blue whitespace-nowrap">
          {escapeHtml(parent?.name || "")}
        </Link>
        <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
      </li>
      {categories
        .filter((c) => c.id !== parent?.id)
        .map((c) => (
          <li className="flex items-center shrink-0 " key={c.id}>
            <Link href={`/category/${parent?.slug}?category=${c.slug}`} className=" text-ma-light-blue whitespace-nowrap">
              {escapeHtml(c.name)}
            </Link>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
        ))}

      <li className="flex items-center dark:text-ma-white text-ma-grey ">{escapeHtml(title)}</li>
    </ul>
  );
};

export default ProductBreadcrumbs;
