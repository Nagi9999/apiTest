import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);
  const discRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;
      const circle = circleRef.current;
      const disc = discRef.current;

      if (cursor && circle && disc) {
       

        circle.style.transform = `translate(-50%, -50%)`;
        disc.style.transform = `translate(-50%, -50%)`;
      }

      setPosition({ x: clientX, y: clientY });
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
