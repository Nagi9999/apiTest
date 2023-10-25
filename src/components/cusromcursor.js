import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
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
        <div className="cursor-circle"></div>
        <div className="cursor-disc"></div>
      </div>
    );
  };
  
  export default CustomCursor;