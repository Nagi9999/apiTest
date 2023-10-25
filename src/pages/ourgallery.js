import Gallery from '@/components/gallery';
import React from 'react';

const OurGallery = () => {
    const Data = [
        {
          id: 1,
          image: "/images/corolla.jpg",
          title: "Toyota Corolla SUV - Efficient and Reliable",
          video: "/videos/corolla.mp4",
        },
        {
          id: 2,
          image: "/images/kona.jpg",
          title: "Hyundai Kona SUV - Compact and Stylish",
          video: "/videos/kona.mp4",
        },
        {
          id: 3,
          image: "/images/amg.jpg",
          title: "Mercedes-AMG Coupe - Performance and Elegance",
          video: "/videos/amg.mp4",
        },
        {
          id: 4,
          image: "/images/astonMartin.jpg",
          title: "Aston Martin Coupe - Luxury and Power",
          video: "/videos/astonMartin.mp4",
        },
      ];

  const galleryItems = Data.map((item) => (
    <div  key={item.id}>
      <Gallery
        imageSrc={item.image}
        videoSrc={item.video}

      />
            <h2 className='text-white sm:my-6 my-4 sm:text-2xl text-xl text-center'>{item.title}</h2>

    </div>
  ));

  return (
    <div className='2xl:contaier mx-auto'>
        <div className='flex flex-col my-32 space-y-16'>
      <h1>Our Gallery</h1>
      {galleryItems}
    </div>
    </div>
    
  );
};

export default OurGallery;
