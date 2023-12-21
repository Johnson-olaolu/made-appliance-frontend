import { RootState, changeCurrency, changeLanguage } from "@/store/appSlice";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const tempCurrencies = [
  {
    code: "EUR",
    name: "Euro",
    symbol: "&#3647;",
  },
  {
    code: "USD",
    name: "US Dollar",
    symbol: "&#3647;",
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "&#3647;",
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    symbol: "&#3647;",
  },
];

const CurrencySelector: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const currency = useSelector((state: RootState) => state.app.currency);
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ctx] = useState(gsap.context(() => {}));

  const handleLanguageChange = (lang: string) => {
    dispatch(changeCurrency(lang));
    ctx.close();
  };
  useLayoutEffect(() => {
    ctx.add("open", () => {
      gsap.fromTo(
        dropdownRef.current,
        {
          display: "block",
          translateY: 40,
          opacity: 0,
        },
        {
          translateY: 24,
          opacity: 1,
          duration: 0.3,
        }
      );
    });
    ctx.add("close", () => {
      gsap.to(dropdownRef.current, {
        translateY: 40,
        opacity: 0,
        display: "none",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [ctx]);
  return (
    <div onMouseEnter={() => ctx.open()} onMouseLeave={() => ctx.close()} ref={wrapperRef} className=" relative">
      <div className={`${isMobile ? " text-ma-white gap-3" : ""} relative flex items-center gap-1 font-bold text-sm cursor-pointer`}>
        <p className="">{currency}</p> <FaChevronDown size={12} />
      </div>
      <div ref={dropdownRef} className=" rounded-md  bg-ma-white shadow-lg py-5 w-[200px]  absolute left-0 top-0 translate-y-10 hidden z-10">
        <ul className="">
          {tempCurrencies.map((currency, idx) => (
            <li
              role="button"
              onClick={() => handleLanguageChange(currency.code)}
              key={idx}
              className=" px-5 py-1 font-medium text-sm leading-6 hover:text-ma-blue capitalize"
            >
              {currency.code} - {currency.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrencySelector;
