"use client";
import Link from "next/link";
import { useState } from "react";

const Card = (props) => {
  const Data = [
    {
      icon: "/images/fizz.jpg ",
      title: "Fizz the world",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/optimum.jpg ",
      title: "The Optimum Nutrition For the Optimum Challenge",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/biodegradable.jpg ",
      title: "Biodegradable Product in an Eco-friendly Space",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/imgworld.jpg ",
      title: "Taking Over the IMG World",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/longestpasses.jpg ",
      title: "Longest Passes In History",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/trick.jpg ",
      title: "Trick or Treat",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },

    {
      icon: "/images/shine.jpg ",
      title: "Let it Shine Brighter",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/firstpepsi.jpg ",
      title: "My First Pepsi",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/knowledge.jpg ",
      title: "Knowledge to Empower",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/pack.jpg ",
      title: "Make Every Pack Count",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/premiumchoice.jpg ",
      title: "The premium Choice for Your Gourmet Moments",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/easterbunny.jpg ",
      title: "Easter Bunny on Easter Break",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/nation.jpg ",
      title: "The Nation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
    {
      icon: "/images/firstpepsi.jpg ",
      title: "My First Pepsi",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue auctor, ultricies justo nec, volutpat orci. Suspendisse nec turpis sit amet justo commodo semper.",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  return (
    <div className="2xl:container mx-auto sm:my-32 my-16 sm:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:justify-between justify-center sm:mt-10 mt-4">
        {props.data.data.map((item) => {
          return (
            <div
              key={item.title}
              className="col-span-1 custom-white0 rounded-md sm:mx-1 mx-3 text-justify items-center sm:px-6 px-3 sm:py-10 py-4 sm:my-0 my-5"
              onMouseEnter={() => setHoveredItem(item.title)} // Set the hovered item on mouse enter
              onMouseLeave={() => setHoveredItem(null)} // Reset the hovered item on mouse leave
            >
              <Link href="/">
                <div className="relative overflow-hidden ">
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
