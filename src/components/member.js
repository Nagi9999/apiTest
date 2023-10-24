import React, { useEffect } from "react";
import { gsap, Power1 } from "gsap";

const Member = () => {
  const Data = [
    {
      id: 1,
      src: "/images/corolla.jpg",
      name: "Toyota Corolla ",
      category: "suv",
    },
    {
      id: 2,
      src: "/images/kona.jpg",
      name: "Hyundai Kona ",
      category: "suv",
    },
    {
      id: 3,
      src: "/images/amg.jpg",
      name: "Mercedes-AMG ",
      category: "coupe",
    },
    {
      id: 4,
      src: "/images/astonMartin.jpg",
      name: "Aston Martin ",
      category: "coupe",
    },
    {
      id: 5,
      src: "/images/mercedesA.jpg",
      name: "Mercedes-Benz  ",
      category: "hatchback",
    },
    {
      id: 6,
      src: "/images/golf.jpg",
      name: "Volkswagen Golf ",
      category: "hatchback",
    },
    {
      id: 7,
      src: "/images/corvette.jpg",
      name: "Chevrolet Corvette ",
      category: "sport",
    },
    {
      id: 8,
      src: "/images/lamborghini.jpg",
      name: "Lamborghini ",
      category: "sport",
    },
  ];

  
  useEffect(() => {
    // Function to handle the image spin animation
    const spinImages = () => {
      const imageElements = document.querySelectorAll(".spin-image");

      imageElements.forEach((image) => {
        gsap.to(image, {
          rotation: 360, // Rotate the image 360 degrees
          duration: 2, // Animation duration in seconds
          onComplete: () => {
            gsap.set(image, { rotation: 0 }); // Set the rotation back to 0 degrees
          },
        });
      });
    };

    const animateText = () => {
        const textElements = document.querySelectorAll(".scale-text");
        
        textElements.forEach((text, index) => {
          gsap.from(text, {
            y: (index % 2 === 0) ? "-100%" : "100%", // Alternate the direction of animation
            scale: 0, // Start with a scale of 0
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration in seconds
            ease: "power1.inOut", // Easing function
            delay: index * 0.2, // Add a delay to stagger the animations
          });
        });
      };

      const animateBorder = () => {
        const borderElements = document.querySelectorAll(".border-circle");
  
        borderElements.forEach((border) => {
          gsap.from(border, {
            scale: 0, // Start with a scale of 0
            duration: 1, // Animation duration in seconds
            ease: "power1.inOut", // Easing function
          });
        });
      };

    // Call the spinImages function when the component mounts
    spinImages();
    animateText();
    animateBorder();
  }, []);
  

  return (
    <div className="flex justify-center pt-20 my-20">
      <div className="grid sm:grid-cols-4 grid-cols-1 justify-between sm:space-x-16 space-x-4  sm:space-y-16 space-y-4 my-8">
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className="px-8 sm:px-8 py-4 sm:py-8  rounded-md text-justify text-white text-2xl max-w-[300px]"
            >
              <div className="box-border border-orange-500 border-2 jus rounded-full p-4 flex flex-col items-center justify-center border-circle">
                <img
                  className="w-[200px] h-[200px] rounded-full object-fill spin-image"
                  src={item.src}
                  alt="This is a card"
                />
              </div>

              <div className="flex ml-[50%]  ">
                <div className="vertical-line scale-text"></div>
                <div className="pl-2 pb-16 scale-text">
                  <h3>{item.name}</h3>
                  <p className="font-bold">{item.category}</p>
                </div>
              </div>
              <div className="ml-[45%] w-7 h-7 rounded-full bg-orange-500 scale-text" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Member;