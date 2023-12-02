"use client";
import FormTextArea from "@/components/form/FormTextArea";
import FormTextInput from "@/components/form/FormTextInput";
import { RootState } from "@/store/appSlice";
import { formatAmount } from "@/utils/misc";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.product.cart);

  useEffect(() => {
    // getAllTax().then((data) => console.log(data));
  }, []);

  const tax = useMemo(() => {
    const tax = 0.0825 * cart.reduce((b, a) => parseFloat(a.product.price) * a.amount + b, 0);
    const total = cart.reduce((b, a) => parseFloat(a.product.price) * a.amount + b, 0) + tax;

    return {
      tax,
      total,
    };
  }, [cart]);

  const checkoutFormik = useFormik({
    initialValues: {
      billing_first_name: "",
      billing_last_name: "",
      billing_company: "",
      billing_country: "",
      billing_address_1: "",
      billing_address_2: "",
      billing_city: "",
      billing_state: "",
      billing_postcode: "",
      billing_phone: "",
      billing_email: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <main className=" bg-ma-white dark:bg-ma-grey ">
      <div className="max-w-6xl  px-2  sm:px-0 mx-auto pt-0 pb-16 sm:border-t-2 border-[#AEAEAE1A]">
        <ul className=" flex items-center text-sm py-4">
          <li className="flex items-center ">
            <Link href="/" className=" text-ma-light-blue">
              Home
            </Link>
            <FiChevronRight className=" mt-[2px] mx-2 dark:text-ma-white text-ma-grey " />
          </li>
          <li className="flex items-center ">
            <span className=" dark:text-ma-white text-ma-grey">Checkout</span>
          </li>
        </ul>
        <div className="">
          <h1 className=" font-semibold text-2xl dark:text-ma-white text-ma-grey pb-4 border-b-2 border-[#AEAEAE1A]">Billing Details</h1>
          <div className="flex items-start gap-8 mt-14">
            <div className=" flex-grow ">
              <form onSubmit={checkoutFormik.handleSubmit}>
                <div className="space-y-5">
                  <div className=" grid grid-cols-2 gap-5">
                    <FormTextInput label="First Name" name="" />
                    <FormTextInput label="Last Name" name="" />
                  </div>
                  <FormTextInput label="Company" optional name="" />
                  <FormTextInput label="Country / Region" name="" />
                  <FormTextInput label="Street address" name="" />
                  <FormTextInput label="Zip Code" name="" />
                  <FormTextInput label="Phone" name="" />
                  <FormTextInput label="Email Address" name="" />
                  <label htmlFor=" " className="block">
                    <input type="checkbox" className="mr-2" />
                    Create Account
                  </label>
                  <div className=" mt-4">
                    <p className=" mb-2">Additional Information</p>
                    <FormTextArea label="Order Notes" optional name="" />
                  </div>
                </div>
              </form>
            </div>
            <div className=" flex-shrink-0 w-[300px]  border border-[#AEAEAE1A] shadow-lg rounded bg-ma-off-white dark:bg-ma-black">
              <div className=" p-4 pb-8  border-b-2 border-[#AEAEAE1A]">
                <p className=" text-ma-text-secondary dark:text-ma-off-white text-sm ">Order Summary</p>
                <ul className=" mt-4 space-y-1">
                  {cart.map((cartItem) => (
                    <li
                      className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center"
                      title={cartItem.product.name}
                      key={cartItem.product.id}
                    >
                      <p className=" flex gap-2 items-center">
                        <span className="">x{cartItem.amount}</span>
                        <span className=" line-clamp-1"> {cartItem.product.name}</span>
                      </p>
                      <span className=""> {formatAmount(parseFloat(cartItem.product.price) * cartItem.amount)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-b-2 border-[#AEAEAE1A]">
                <ul className="space-y-2">
                  <li className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center">
                    <span className="">Amount:</span>
                    <span className="">{formatAmount(cart.reduce((b, a) => parseFloat(a.product.price) * a.amount + b, 0))}</span>
                  </li>
                  <li className=" text-xs text-ma-text-primary flex justify-between gap-10 items-center">
                    <span className="">Tax:</span>
                    <span className="">{formatAmount(tax.tax)}</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 ">
                <p className=" text-xs  text-ma-text-primary flex justify-between gap-10 items-center">
                  <span className="">Order Total:</span>
                  <span className=" text-base font-bold text-ma-text-secondary dark:text-ma-off-white">{formatAmount(tax.total)}</span>
                </p>
              </div>
              <div className=" p-4">
                <button className=" text-xs h-10 w-full bg-ma-light-blue rounded-sm text-ma-white flex items-center justify-center">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
