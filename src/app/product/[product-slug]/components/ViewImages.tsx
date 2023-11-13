"use client";
import { IImage, IProduct } from "@/services/types";
import React, { useEffect, useState } from "react";

interface IViewImages {
  product: IProduct;
}

const ViewImages: React.FC<IViewImages> = (props) => {
  const { product } = props;
  const [activeImage, setActiveImage] = useState<IImage>();

  useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product.images]);
  return (
    <div className=" flex flex-col ">
      <div
        className=" flex-grow h-[500px] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${activeImage?.src}")`,
          //  backgroundSize: "contain", backgroundPosition: "center center"
        }}
      ></div>
      <div className=" py-4 text-center mt-5">
        <p className="text-ma-text-secondary dark:text-ma-off-white">
          {product.images.findIndex((p) => p.id === activeImage?.id) + 1} of {product.images.length}
        </p>
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        {product.images.map((p) => (
          <div className={`p-2 hover:ring-2 rounded hover:ring-gray-500 ${p.id == activeImage?.id && " ring-2 ring-ma-light-blue"}`} key={p.id}>
            <div
              role="button"
              className={` h-14 w-14 rounded `}
              style={{ background: `url("${p.src}")`, backgroundSize: "cover" }}
              onClick={() => setActiveImage(p)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewImages;
