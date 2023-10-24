import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import WallPaper from '@/components/wallpaper';
import axios from '@/utils/axios';

const Inventory = ({ data }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    // Define the GSAP animation
    const animateText = (textRef) => {
      gsap.fromTo(
        textRef,
        { x: '100%', scale: 0 },
        { x: '0%', scale: 1, duration: 3, ease: 'power4.out' }
      );
    };

    textRefs.current.forEach((textRef) => {
      animateText(textRef);
    });
  }, []);

  return (
    <main className="2xl:container mx-auto">
      {data.data.map((item, index) => (
        <WallPaper
          key={index}
          imageSrc={item.image}
          textPosition={index % 2 === 0 ? 'left' : 'right'}
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
        >
          <div
            ref={(el) => (textRefs.current[index] = el)}
            style={{ transform: 'translate(0%, -50%)' }}
          >
            <h1 className="sm:text-4xl text-lg sm:font-semibold">{item.title}</h1>
            <p className="font-semibold sm:text-lg text-[8px]">{item.text}</p>
          </div>
        </WallPaper>
      ))}
    </main>
  );
};

export default Inventory;

export async function getServerSideProps({ locale }) {
  try {
    const response = await axios.get('/projects', {
      headers: {
        'Accept-Language': locale,
      },
    });
    const data = response.data;

    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: [] } }; // Provide an empty array as a fallback
  }
}
