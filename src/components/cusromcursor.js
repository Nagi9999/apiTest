import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);
  const discRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    const { clientX, clientY } = { x: 0, y: 0 };

    const onMouseMove = (e) => {

      const { clientX, clientY } = e;
      const circle = circleRef.current;
      const disc = discRef.current;

      // Adjust the circle's position with a slight delay
      if (circle && disc) {
        const circleX = clientX - circle.clientWidth / 2;
        const circleY = clientY - circle.clientHeight / 2;

        // Adjust the disc's position with a delay
        const discX = clientX - disc.clientWidth / 2;
        const discY = clientY - disc.clientHeight / 2;

        circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

        // Create a slight delay for the disc's movement
        setTimeout(() => {
          disc.style.transform = `translate(${discX}px, ${discY}px)`;
        }, 50); // Adjust the delay time as needed
      }

   
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      ref={cursorRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="cursor-circle" ref={circleRef}></div>
      <div className="cursor-disc" ref={discRef}></div>
    </div>
  );
};

export default CustomCursor;
