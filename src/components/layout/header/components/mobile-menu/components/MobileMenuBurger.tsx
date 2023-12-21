import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface IMobileMenuBurger {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenuBurger: React.FC<IMobileMenuBurger> = (props) => {
  const { menuOpen, setMenuOpen } = props;
  const [ctx] = useState(gsap.context(() => {}));
  const burgerItem1 = useRef<HTMLDivElement>(null);
  const burgerItem2 = useRef<HTMLDivElement>(null);
  const burgerItem3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ctx.add("openMenu", () => {
      gsap.to(burgerItem1.current, {
        width: "20px",
        duration: 0.2,
      });
      gsap.to(burgerItem3.current, {
        width: "14px",
        duration: 0.2,
      });
    });
    ctx.add("closeMenu", () => {
      gsap.to(burgerItem1.current, {
        width: "24px",
        duration: 0.2,
      });
      gsap.to(burgerItem3.current, {
        width: "24px",
        duration: 0.2,
      });
    });
  }, [ctx]);

  useEffect(() => {
    if (menuOpen) {
      ctx.openMenu();
    } else {
      ctx.closeMenu();
    }
  }, [menuOpen, ctx]);

  return (
    <div role="button" onClick={() => setMenuOpen(true)} className=" space-y-[6px] lg:hidden">
      <div ref={burgerItem1} className=" w-6 h-[2px] bg-ma-primary"></div>
      <div ref={burgerItem2} className=" w-6 h-[2px] bg-ma-primary"></div>
      <div ref={burgerItem3} className=" w-6 h-[2px] bg-ma-primary"></div>
    </div>
  );
};

export default MobileMenuBurger;
