import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface IJumbotronDotItem {
  activeIndex: number;
  formerIndex: number;
  idx: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setFormerIndex: React.Dispatch<React.SetStateAction<number>>;
}
const JumbotronDotItem: React.FC<IJumbotronDotItem> = (props) => {
  const { activeIndex, formerIndex, idx, setActiveIndex, setFormerIndex } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ctx] = useState(gsap.context(() => {}));
  useLayoutEffect(() => {
    ctx.add("enter", () => {
      gsap.to(buttonRef.current, {
        width: 12,
        height: 12,
        backgroundColor: "#0540F2",
      });
    });
    ctx.add("exit", () => {
      gsap.fromTo(
        buttonRef.current,
        {
          width: 12,
          height: 12,
          backgroundColor: "#0540F2",
        },
        {
          width: 28,
          height: 8,
          backgroundColor: "#fff",
        }
      );
    });
  }, []);

  useEffect(() => {
    if (formerIndex !== activeIndex) {
      if (idx === activeIndex) {
        ctx.enter();
      } else if (idx === formerIndex) {
        ctx.exit();
      }
    }
  }, [activeIndex, ctx, formerIndex, idx]);

  const handleClick = () => {
    if (activeIndex !== idx) {
      setFormerIndex(activeIndex);
      setActiveIndex(idx);
    }
  };
  return (
    <button
      ref={buttonRef}
      onClick={() => handleClick()}
      className={`${idx === activeIndex && idx === formerIndex ? " h-3 w-3 bg-ma-blue" : " w-7 h-2 "}  rounded-full bg-ma-white`}
    ></button>
  );
};

export default JumbotronDotItem;
