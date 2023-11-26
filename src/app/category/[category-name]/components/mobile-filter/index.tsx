"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import useCategoryPage from "../context";
import gsap from "gsap";
import SidebarCategories from "../sidebar/components/SidebarCategories";
import { useSelector } from "react-redux";
import { RootState } from "@/store/appSlice";

const MobileFilter = () => {
  const { showMobileFilter, setShowMobileFilter } = useCategoryPage();
  const mobileFilterRef = useRef<HTMLDivElement>(null);
  const [ctx, setCtx] = useState(gsap.context(() => {}, mobileFilterRef));
  const subCategories = useSelector((state: RootState) => state.category.subCategories);

  useLayoutEffect(() => {
    ctx.add("entry", () => {
      gsap.to(ctx.selector?.(mobileFilterRef.current), {
        opacity: 100,
        duration: 0.5,
        y: 0,
      });
    });

    ctx.add("exit", () => {
      gsap.to(ctx.selector?.(mobileFilterRef.current), {
        opacity: 0,
        duration: 0.5,
        y: 640,
        onComplete: () => setShowMobileFilter(false),
      });
    });
    ctx.entry();
    return () => ctx.revert();
  }, [ctx, setShowMobileFilter, showMobileFilter]);
  return (
    <>
      {showMobileFilter && (
        <aside className="fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-20 z-50 flex flex-col justify-end">
          <div
            ref={mobileFilterRef}
            className="h-[640px] flex flex-col  w-full bg-ma-off-white  dark:bg-ma-grey  rounded-t-3xl transform translate-y-full"
          >
            <div className=" p-4 flex items-center justify-between text-ma-text-secondary  dark:text-ma-off-white border-b-2 border-[#AEAEAE1A] ">
              <p className=" text-lg font-bold">Filters</p>
              <FiX size={24} role="button" onClick={() => ctx.exit()} />
            </div>
            <div className=" flex-grow overflow-auto">
              <SidebarCategories categories={subCategories || []} />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default MobileFilter;
