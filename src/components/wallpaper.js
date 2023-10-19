import React from "react";

export default function WallPaper({ imageSrc, children,  textPosition, imagePosition }) {
  const imageOrder = imagePosition === 'left' ? 'sm:pr-0 pr-0 justify-start' : 'sm:pl-0 pl-0 justify-end';
  const textOrder = textPosition === 'left' ? 'sm:pl-0 pl-0 sm:pr-2 pr-0 left-0' : 'sm:pr-20 pr-0 sm:pl-2 pl-0 right-0';

  return (
    <div className={`relative  sm:flex ${imageOrder}  mt-12 `}>
      <div className={`w-auto    `}>
        <img className="w-auto sm:py-8 py-4 sm:min-w-[1100px] sm:max-h-[640px] object-cover " src={imageSrc} alt="" />
      </div>
      <div className={` sm:absolute sm:top-[50%]  sm:m-0 m-8  flex flex-col   sm:w-1/2 text-gray-400 ${textOrder}`}
      style={{ transform: 'translate(0%, -50%)' }} >
        {children}
      </div>
    </div>
  );
}
