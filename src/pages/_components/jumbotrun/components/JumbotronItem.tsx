import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface IJumbotronItem {
  data: {
    image: string;
    prefix: string;
    title: string;
    data: string;
    cta: string;
  };
  activeIndex: number;
  formerIndex: number;
  idx: number;
}
const JumbotronItem: React.FC<IJumbotronItem> = (props) => {
  const { data, activeIndex, formerIndex, idx } = props;
  const width = window.innerWidth;
  const itemWrapperRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dataRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [ctx] = useState(gsap.context(() => {}));
  useLayoutEffect(() => {
    ctx.add("enter", () => {
      const enterTl = gsap.timeline();
      enterTl.fromTo(
        itemWrapperRef.current,
        {
          left: formerIndex > idx ? -width : width,
          ease: "none",
          zIndex: 0,
        },
        {
          left: 0,
          duration: 0.5,
          ease: "none",
          zIndex: 1,
        }
      );
      //add animation for text and button
      enterTl.fromTo(
        prefixRef.current,
        {
          translateY: 80,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      );
      enterTl.fromTo(
        titleRef.current,
        {
          translateY: 80,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      );
      enterTl.fromTo(
        dataRef.current,
        {
          translateY: 80,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      );
      enterTl.fromTo(
        buttonRef.current,
        {
          translateY: 80,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      );
    });

    ctx.add("exit", () => {
      gsap.to(itemWrapperRef.current, {
        left: activeIndex > idx ? -width : width,
        duration: 0.5,
        ease: "none",
        zIndex: 0,
      });
    });
  }, [ctx, activeIndex, formerIndex, idx, width]);

  useEffect(() => {
    if (formerIndex !== activeIndex) {
      if (idx === activeIndex) {
        ctx.enter();
      } else if (idx === formerIndex) {
        ctx.exit();
      }
    }
  }, [activeIndex, ctx, formerIndex, idx]);

  return (
    <div
      ref={itemWrapperRef}
      className=" h-[620px] w-full bg-slate-700 absolute top-0 "
      style={{ background: `url("${data.image}")`, backgroundPosition: "center", backgroundSize: "cover", left: "0" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
        <div className=" space-y-5 max-w-xl">
          <p ref={prefixRef} className=" uppercase text-2xl text-ma-primary2">
            {data.prefix}
          </p>
          <h2 ref={titleRef} className=" text-6xl font-medium capitalize">
            {data.title}
          </h2>
          <p ref={dataRef} className=" text-lg leading-9 pr-10">
            {data.data}
          </p>
          <button ref={buttonRef} className=" bg-ma-primary2 text-ma-white hover:bg-ma-blue font-bold py-4 px-9 rounded-full flex items-center gap-2">
            <span>{data.cta}</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JumbotronItem;
