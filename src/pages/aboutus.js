"use client";
import axios from "@/utils/axios";
import React, { useRef } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

export default function Page({ data }) {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <button onClick={goToPrevSlide} className="swiper-button-prev "></button>
      <button onClick={goToNextSlide} className="swiper-button-next"></button>

      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1} // Initial slides per view for larger screens
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Add responsive breakpoints
        breakpoints={{
          600: {
            // Slides per view on screens 768px and larger
            slidesPerView: 3,
          },
        }}
      >
        {data.data.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="2xl:container mx-auto sm:my-32 my-16 sm:px-20">
              <div className="flex justify-between sm:mt-10 mt-4">
                <div className="col-span-  rounded-md sm:mx-1 mx-3 text-justify items-center sm:px-6 px-3 sm:py-10 py-4 sm:my-0 my-5">
                  <div href="/">
                    <div className="relative overflow-hidden ">
                      <img
                        src={item.image}
                        alt="Your Icon"
                        className={`duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] w-auto h-auto my-[5px] `}
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  try {
    const response = await axios.get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    });
    const data = response.data;

    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: [] } }; // Provide an empty array as a fallback
  }
}
