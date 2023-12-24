import { jumbotronData } from "@/utils/constants";
import React, { useLayoutEffect, useState } from "react";
import JumbotronItem from "./components/JumbotronItem";
import gsap from "gsap";
import JumbotronDotItem from "./components/JumbotronDotItem";

interface IJumbotron {
  data: {
    image: string;
    prefix: string;
    title: string;
    data: string;
    cta: string;
  }[];
}

const Jumbotron: React.FC<IJumbotron> = (props) => {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [formerIndex, setFormerIndex] = useState(0);

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === data.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
      setFormerIndex(activeIndex);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, formerIndex, data]);
  return (
    <div className="">
      <div className="min-h-[620px] relative w-full overflow-hidden">
        {data.map((data, idx) => (
          <JumbotronItem idx={idx} data={data} key={idx} activeIndex={activeIndex} formerIndex={formerIndex} />
        ))}
        <div className=" z-10 flex items-center gap-4 absolute left-1/2 -translate-x-1/2 bottom-9">
          {data.map((data, idx) => (
            <JumbotronDotItem
              setActiveIndex={setActiveIndex}
              setFormerIndex={setFormerIndex}
              activeIndex={activeIndex}
              idx={idx}
              formerIndex={formerIndex}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
