import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = (props) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      gsap.from(textElement, {
        y: '100%',
        opacity: 0,
        duration: 3,
        ease: 'power4.out',
      });
    }
  }, []);

  return (
    <div className="relative sm:mt-0 mt-16">
      <div>
        <img
          className="w-full max-h-[80vh] object-cover"
          src={props.data.data[1].image}
          alt="Banner Image"
        />
      </div>
      <div className="2xl:container mx-auto absolute inset-0 flex flex-col justify-center items-center mt-4">
        <h1
          ref={textRef}
          className="sm:text-7xl text-center sm:px-60 px-16 items-center sm:font-light font-semibold"
        >
          <span className="progressive-text">
            Upgrade your life with our sleek, reliable cars. Experience luxury,
            power, and style. Unleash adventure, make memories, and embrace
            freedom on the open road.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
