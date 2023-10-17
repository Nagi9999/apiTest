import React from "react";

export default function WallPaper({ imageSrc, children,  textPosition, imagePosition }) {
  const imageOrder = imagePosition === 'left' ? 'sm:pr-0 pr-32 justify-start' : 'sm:pl-0 pl-32 justify-end';
  const textOrder = textPosition === 'left' ? 'sm:pl-20 pl-2 sm:pr-2 pr-20 left-0' : 'sm:pr-20 pr-2 sm:pl-2 pl-20 right-0';

  return (
    <div className={`relative flex ${imageOrder}  mt-12 `}>
      <div className={`w-auto    `}>
        <img className="w-auto py-8 sm:min-w-[1100px] sm:max-h-[640px] object-cover " src={imageSrc} alt="" />
      </div>
      <div className={` absolute top-[50%] flex flex-col   sm:w-1/2 text-gray-400 ${textOrder}`}
      style={{ transform: 'translate(0%, -50%)' }} >
        {children}
      </div>
    </div>
  );
}
