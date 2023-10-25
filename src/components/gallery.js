import React, { useState, useRef } from 'react';

const Gallery = ({ imageSrc, videoSrc, title }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setVideoPlaying(true);
    videoRef.current.play();
  };

  const pauseVideo = () => {
    setVideoPlaying(false);
    videoRef.current.pause();
  };

  const onVideoEnded = () => {
    setVideoPlaying(false);
    videoRef.current.load(); // This will reset the video to the beginning
  };

  return (
    <div className="image-gallery-container mx-auto">
      {isVideoPlaying ? (
        <div>
          <video
            ref={videoRef}
            className="video h-[500px] w-[300px]"
            autoPlay
            controls
            onEnded={onVideoEnded}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <h2>{title}</h2>
        </div>
      ) : (
        <div>
          <img src={imageSrc} alt="Your Image" className="image" />
          <h2 >{title}</h2>
        </div>
      )}
      <button
        onClick={isVideoPlaying ? pauseVideo : playVideo}
        className={`play-button ${isVideoPlaying ? 'hidden' : ''}`}
      >
        {isVideoPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Gallery;
