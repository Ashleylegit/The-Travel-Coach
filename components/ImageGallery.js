import React from 'react';
import Image from 'next/image';

const ImageGallery = ({ images }) => (
  <div className="image-gallery">
    {images.map((image, index) => (
    <div key={index} className="gallery-item">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
    ))}
  </div>
);

export default ImageGallery;