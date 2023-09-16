import React, { forwardRef } from 'react';
import Pic56 from '../assets/images/pic56.webp';
import Pic45 from '../assets/images/pic45.webp';
import Pic48 from '../assets/images/pic48.webp';
import Pic27 from '../assets/images/pic27.jpg';
import Pic8 from '../assets/images/pic8.jpg';
import DSC_0060 from '../assets/images/DSC_0060.JPG';
import Pic51 from '../assets/images/pic51.webp';
import Pic34 from '../assets/images/pic34.jpg';
import Pic28 from '../assets/images/pic28.jpg';
import Pic57 from '../assets/images/pic57.webp';
import Pic33 from '../assets/images/pic33.jpg';
import IMG_20230823_WA0019 from '../assets/images/IMG-20230823-WA0019.jpg';
import IMG_20220314_WA0134 from '../assets/images/IMG-20220314-WA0134.jpg';
import Pic58 from '../assets/images/pic58.webp';
import Pic62 from '../assets/images/pic62.webp';
import Pic59 from '../assets/images/pic59.webp';
import DSC_5314 from '../assets/images/DSC_5314.JPG';
import Pic22 from '../assets/images/pic22.JPG';
import Pic26 from '../assets/images/pic26.JPG';
import Pic60 from '../assets/images/pic60.webp';
import PSX_2590 from '../assets/images/PSX_2590.jpg';
import PSX_2762 from '../assets/images/PSX_2762.jpg';
import IMG_20230823_WA0015 from '../assets/images/IMG-20230823-WA0015.jpg';
import IMG_2510_1 from '../assets/images/IMG_2510-1.jpg';
import Pic20 from '../assets/images/pic20.JPG';

const Photos = forwardRef((props, ref) => {
  const images = [
      Pic56, Pic45, Pic48, Pic27, Pic8, DSC_0060, Pic51, Pic34, Pic28, Pic57,
      Pic33, IMG_20230823_WA0019, IMG_20220314_WA0134, Pic58, Pic62, Pic59, DSC_5314,
      Pic22, Pic26, Pic60, PSX_2590, PSX_2762, IMG_20230823_WA0015, IMG_2510_1, Pic20
  ];

  return (
      <div className='photos' ref={ref}>
          {images.map((imageSrc, index) => (
              <img key={index} src={imageSrc} alt={`Gallery ${index + 1}`} />
          ))}
      </div>
  );
});

export default Photos;
