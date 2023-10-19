"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

const Card = (props) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const adRef = useRef(null);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/details/${id}`);
  };

  return (
    <div className="2xl:container mx-auto sm:my-32 my-16 sm:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:justify-between justify-center sm:mt-10 mt-4">
        {props.data.data.map((item) => {
          return (
            <div
              key={item.title}
              className="col-span-1 custom-white0 rounded-md sm:mx-1 mx-3 text-justify items-center sm:px-6 px-3 sm:py-10 py-4 sm:my-0 my-5"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div onClick={() => handleClick(item.id)} ref={adRef}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt="Your Icon"
                    className={`duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] w-auto h-auto my-[5px] ${
                      hoveredItem === item.title ? "transform scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="font-bold sm:text-2xl text-xl sm:mt-4 text-white my-3">
                  {item.title}
                </h3>
                <p className="sm:mt-4 mt-2 pr-4 sm:text-xl text-lg text-white sm:tracking-normal tracking-tighter">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
