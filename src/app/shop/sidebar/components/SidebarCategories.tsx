"use client";
import { ICategory } from "@/services/types";
import SideBarItemWrapper from "../SideBarItemWrapper";
import { escapeHtml } from "@/utils/misc";
import useShopPage from "../../context";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSubCategory } from "@/store/categorySlice";
import { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

interface ISidebarCategories {
  categories: ICategory[];
}
const SidebarCategories: React.FC<ISidebarCategories> = (props) => {
  const params = useParams<any>();
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("category");
  const { categories } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSubCategory(categories));
  }, []);

  const { setQuery, searchQuery } = useShopPage();
  return (
    <SideBarItemWrapper title="Sub Categories" open>
      <ul className="">
        {categories.map((category) =>
          category.slug !== subCategory ? (
            <li className="py-2 px-4 sm:px-0" key={category.id}>
              <Link
                href={`?category=${category.slug}`}
                // onClick={() => {
                //   setQuery({ categories: [category.name] });
                //   searchQuery();
                // }}
                className="dark:text-ma-white text-ma-grey space-x-2 pt-1 text-sm"
              >
                <p className="inline">{escapeHtml(category.name)}</p>
                <span className="opacity-75 text-xs">({category.count})</span>
              </Link>
            </li>
          ) : (
            <li className="py-2 px-4 sm:px-0" key={category.id}>
              <Link
                href={`/${params["category-name"]}`}
                // onClick={() => {
                //   setQuery({ categories: [category.name] });
                //   searchQuery();
                // }}
                className="text-ma-light-blue space-x-2 pt-1 text-sm"
              >
                <p className="inline">{escapeHtml(category.name)}</p>
                <span className="opacity-75 text-xs">({category.count})</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </SideBarItemWrapper>
  );
};

export default SidebarCategories;
