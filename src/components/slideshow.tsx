import React, { useState } from 'react';

const Slideshow = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slideshow;