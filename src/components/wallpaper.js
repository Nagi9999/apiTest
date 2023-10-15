import React from "react";

export default function WallPaper({ imageSrc, children,  textPosition, imagePosition }) {
  const imageOrder = imagePosition === 'left' ? 'sm:pr-0 pr-32 justify-start' : 'sm:pl-0 pl-32 justify-end';
  const textOrder = textPosition === 'left' ? 'sm:pl-20 pl-2 sm:pr-2 pr-20 left-0' : 'sm:pr-20 pr-2 sm:pl-2 pl-20 right-0';

  return (
    <div className={`relative flex ${imageOrder} bg-gray-500 mt-12 `}>
      <div className={`w-auto    `}>
        <img className="w-auto py-8 sm:min-w-[1100px] sm:max-h-[60vh] object-cover" src={imageSrc} alt="" />
      </div>
      <div className={` absolute top-1/3 flex flex-col   sm:w-1/2 text-gray-400 ${textOrder}`}>
        {children}
      </div>
    </div>
  );
}
