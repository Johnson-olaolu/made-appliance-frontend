"use client";
import { ICategory } from "@/services/types";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import useCategoryPage from "../../../context";

interface IFilterBar {
  count: number;
  hideFilter?: boolean;
}

const FilterBar: React.FC<IFilterBar> = (props) => {
  const { count, hideFilter = false } = props;
  const { setShowMobileFilter } = useCategoryPage();
  return (
    <>
      <div className=" h-20 bg-ma-off-white dark:bg-ma-black p-4  w-full items-center rounded  justify-between hidden sm:flex">
        <p className="  text-sm dark:text-ma-white text-ma-grey ">{count} products </p>
        {!hideFilter && (
          <div className="flex items-center gap-4">
            {/* sort */}
            <svg
              className=" dark:text-ma-white text-ma-grey "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.40015 17C3.01682 17 2.73749 16.875 2.56215 16.625C2.38749 16.375 2.36682 16.0667 2.50015 15.7L5.37515 8.00001C5.47515 7.71668 5.66682 7.47901 5.95015 7.28701C6.23349 7.09568 6.52515 7.00001 6.82515 7.00001C7.10849 7.00001 7.39615 7.09568 7.68815 7.28701C7.97949 7.47901 8.17515 7.71668 8.27515 8.00001L11.1752 15.725C11.3085 16.075 11.2878 16.375 11.1132 16.625C10.9378 16.875 10.6585 17 10.2752 17C10.0918 17 9.91282 16.9417 9.73815 16.825C9.56282 16.7083 9.44182 16.5583 9.37515 16.375L8.75015 14.6H4.90015L4.32515 16.35C4.25849 16.5333 4.13782 16.6873 3.96315 16.812C3.78782 16.9373 3.60015 17 3.40015 17ZM5.50015 12.9H8.10015L6.90015 9.15001H6.75015L5.50015 12.9ZM14.9252 17C14.5918 17 14.3042 16.879 14.0622 16.637C13.8208 16.3957 13.7002 16.1083 13.7002 15.775C13.7002 15.5917 13.7418 15.379 13.8252 15.137C13.9085 14.8957 14.0085 14.7083 14.1252 14.575L18.7502 8.80001H14.8002C14.5502 8.80001 14.3378 8.71235 14.1632 8.53701C13.9878 8.36235 13.9002 8.15001 13.9002 7.90001C13.9002 7.65001 13.9878 7.43735 14.1632 7.26201C14.3378 7.08735 14.5502 7.00001 14.8002 7.00001H19.7252C20.0585 7.00001 20.3462 7.12068 20.5882 7.36201C20.8295 7.60401 20.9502 7.90001 20.9502 8.25001C20.9502 8.43335 20.9128 8.64168 20.8382 8.87501C20.7628 9.10835 20.6668 9.29168 20.5502 9.42501L15.9502 15.2H20.1002C20.3502 15.2 20.5628 15.2873 20.7382 15.462C20.9128 15.6373 21.0002 15.85 21.0002 16.1C21.0002 16.35 20.9128 16.5627 20.7382 16.738C20.5628 16.9127 20.3502 17 20.1002 17H14.9252ZM10.2002 5.00001C9.96682 5.00001 9.80849 4.90001 9.72515 4.70001C9.64182 4.50001 9.68349 4.31668 9.85015 4.15001L11.6502 2.35001C11.6835 2.31668 11.8002 2.26668 12.0002 2.20001C12.0335 2.20001 12.1502 2.25001 12.3502 2.35001L14.1502 4.15001C14.3168 4.31668 14.3585 4.50001 14.2752 4.70001C14.1918 4.90001 14.0335 5.00001 13.8002 5.00001H10.2002ZM12.0002 21.8C11.9668 21.8 11.8502 21.75 11.6502 21.65L9.85015 19.85C9.68349 19.6833 9.64182 19.5 9.72515 19.3C9.80849 19.1 9.96682 19 10.2002 19H13.8002C14.0335 19 14.1918 19.1 14.2752 19.3C14.3585 19.5 14.3168 19.6833 14.1502 19.85L12.3502 21.65C12.3168 21.6833 12.2002 21.7333 12.0002 21.8Z"
                fill="currentColor"
              />
            </svg>
            <select name="" id="" className=" filterbar-select ">
              <option value="">Best Match</option>
              <option value="">Price Low End</option>
              <option value="">Price High End</option>
              <option value="">Highest Rated</option>
            </select>
          </div>
        )}
      </div>
      <div className="bg-ma-off-white dark:bg-ma-black  w-full block sm:hidden">
        <div className=" h-20 flex items-center justify-between p-4">
          <p className="  text-sm dark:text-ma-white text-ma-grey ">{count} products </p>
          <svg
            className=" dark:text-ma-white text-ma-grey "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
          >
            <path
              d="M3.40015 17C3.01682 17 2.73749 16.875 2.56215 16.625C2.38749 16.375 2.36682 16.0667 2.50015 15.7L5.37515 8.00001C5.47515 7.71668 5.66682 7.47901 5.95015 7.28701C6.23349 7.09568 6.52515 7.00001 6.82515 7.00001C7.10849 7.00001 7.39615 7.09568 7.68815 7.28701C7.97949 7.47901 8.17515 7.71668 8.27515 8.00001L11.1752 15.725C11.3085 16.075 11.2878 16.375 11.1132 16.625C10.9378 16.875 10.6585 17 10.2752 17C10.0918 17 9.91282 16.9417 9.73815 16.825C9.56282 16.7083 9.44182 16.5583 9.37515 16.375L8.75015 14.6H4.90015L4.32515 16.35C4.25849 16.5333 4.13782 16.6873 3.96315 16.812C3.78782 16.9373 3.60015 17 3.40015 17ZM5.50015 12.9H8.10015L6.90015 9.15001H6.75015L5.50015 12.9ZM14.9252 17C14.5918 17 14.3042 16.879 14.0622 16.637C13.8208 16.3957 13.7002 16.1083 13.7002 15.775C13.7002 15.5917 13.7418 15.379 13.8252 15.137C13.9085 14.8957 14.0085 14.7083 14.1252 14.575L18.7502 8.80001H14.8002C14.5502 8.80001 14.3378 8.71235 14.1632 8.53701C13.9878 8.36235 13.9002 8.15001 13.9002 7.90001C13.9002 7.65001 13.9878 7.43735 14.1632 7.26201C14.3378 7.08735 14.5502 7.00001 14.8002 7.00001H19.7252C20.0585 7.00001 20.3462 7.12068 20.5882 7.36201C20.8295 7.60401 20.9502 7.90001 20.9502 8.25001C20.9502 8.43335 20.9128 8.64168 20.8382 8.87501C20.7628 9.10835 20.6668 9.29168 20.5502 9.42501L15.9502 15.2H20.1002C20.3502 15.2 20.5628 15.2873 20.7382 15.462C20.9128 15.6373 21.0002 15.85 21.0002 16.1C21.0002 16.35 20.9128 16.5627 20.7382 16.738C20.5628 16.9127 20.3502 17 20.1002 17H14.9252ZM10.2002 5.00001C9.96682 5.00001 9.80849 4.90001 9.72515 4.70001C9.64182 4.50001 9.68349 4.31668 9.85015 4.15001L11.6502 2.35001C11.6835 2.31668 11.8002 2.26668 12.0002 2.20001C12.0335 2.20001 12.1502 2.25001 12.3502 2.35001L14.1502 4.15001C14.3168 4.31668 14.3585 4.50001 14.2752 4.70001C14.1918 4.90001 14.0335 5.00001 13.8002 5.00001H10.2002ZM12.0002 21.8C11.9668 21.8 11.8502 21.75 11.6502 21.65L9.85015 19.85C9.68349 19.6833 9.64182 19.5 9.72515 19.3C9.80849 19.1 9.96682 19 10.2002 19H13.8002C14.0335 19 14.1918 19.1 14.2752 19.3C14.3585 19.5 14.3168 19.6833 14.1502 19.85L12.3502 21.65C12.3168 21.6833 12.2002 21.7333 12.0002 21.8Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className=" h-20 flex items-center justify-between p-4">
          <select name="" id="" className=" filterbar-select ">
            <option value="">Best Match</option>
            <option value="">Price Low End</option>
            <option value="">Price High End</option>
            <option value="">Highest Rated</option>
          </select>
          <button
            onClick={() => setShowMobileFilter(true)}
            className=" h-12 w-40 flex items-center justify-center gap-4 rounded-sm border border-ma-text-secondary dark:border-ma-white bg-transparent text-sm focus-within:ring-ma-light-blue focus-within:ring-2 dark:text-ma-white text-ma-grey"
          >
            <VscSettings size={20} /> <span className=" tracking-wider">Filter</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
