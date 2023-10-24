import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import WallPaper from "@/components/wallpaper";
import axios from "@/utils/axios";

const Inventory = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.inventory-item');

    elements.forEach((element) => {
      const image = element.querySelector('.inventory-image');
      const title = element.querySelector('.inventory-title');
      const text = element.querySelector('.inventory-text');

      gsap.set(element, { filter: 'grayscale(100%)' });

      element.addEventListener('mouseenter', () => {
        gsap.to(element, { filter: 'grayscale(0%)' });
        gsap.fromTo(title, { y: 300, opacity: 0 }, { y: 200, opacity: 1, ease: 'power4.out' });
        gsap.fromTo(text, { y: 0, opacity: 1, ease: 'power4.out' }, { y: 200, opacity: 0, ease: 'power4.out' }); // Move text to the bottom
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { filter: 'grayscale(100%)' });
        gsap.fromTo(title, { y: 20, opacity: 1 }, { y: 300, opacity: 0, ease: 'power4.out' });
        gsap.fromTo(text,{ y: 200, opacity: 0, ease: 'power4.out' }, { y: 20, opacity: 1, ease: 'power4.out' }); // Move text back to its original position
      });
      
    });
  }, []);

  // Slice the data to display only the first two items
  const slicedData = data.data.slice(0, 2);

  return (
    <main className="2xl:container mx-auto" ref={containerRef}>
      {slicedData.map((item, index) => (
        <div className="inventory-item my-16" key={index}>
          <WallPaper imageSrc={item.image} textPosition="left" imagePosition="right">
            <div className="image-title-container">
              <h1 className="sm:text-4xl text-lg sm:font-semibold inventory-title" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }} >{item.title}</h1>
            </div>
            <p className="font-semibold sm:text-lg text-[8px] inventory-text" style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }} >{item.text}</p>
          </WallPaper>
        </div>
      ))}
    </main>
  );
};

export default Inventory;

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
