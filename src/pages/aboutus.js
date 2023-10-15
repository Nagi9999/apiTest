"use client";
import axios from "@/utils/axios";
import React, { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

export default function Page({ data }) {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
      <button onClick={goToPrevSlide} className="swiper-button-prev"></button>
      <button onClick={goToNextSlide} className="swiper-button-next"></button>

      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={(swiper) => {
          // Calculate the real active index (taking loop into account)
          const realActiveIndex = swiper.realIndex;
          setActiveSlideIndex(realActiveIndex);
        }}
      >
        {data.data.map((item, index) => (
          <SwiperSlide key={item.title}>
            <div className="flex justify-between sm:mt-10 mt-4">
              <div className={`flex justify-center `}>
                <div>
                  <div className="relative ">
                    <img
                      src={item.image}
                      alt="Your Icon"
                      className="sm:min-h-[450px]  min-h-[300px]  "
                    />
                  </div>
                  {/* Conditionally render text and title for the middle slide */}
                  {index === activeSlideIndex ? (
                    <div className="m-8">
                      <h2
                        className={`font-bold sm:text-2xl text-xl sm:mt-4 text-white my-3 `}
                      >
                        {item.title}
                      </h2>
                      <p className="sm:mt-4 mt-2  sm:text-xl text-lg text-white sm:tracking-normal tracking-tighter">
                        {item.text}
                      </p>
                    </div>
                  ) : null}
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
