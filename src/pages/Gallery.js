import React, { useRef } from 'react';
import Photos from '../components/Photos';
import "../styles/Gallery.css";

function Gallery() {
    const photosRef = useRef(null);

    const scrollPhotosLeft = () => {
        if (photosRef.current) {
            photosRef.current.scrollBy({
                left: -300, // Adjust as needed
                behavior: 'smooth'
            });
        }
    };

    const scrollPhotosRight = () => {
        if (photosRef.current) {
            photosRef.current.scrollBy({
                left: 300, // Adjust as needed
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='gallery'>
            <h3>My Gallery</h3>
            <button id='prevBtn' className='nav-btn' onClick={scrollPhotosLeft}>&#10094;</button>
            
                <Photos ref={photosRef} />
          
            <button id='nextBtn' className='nav-btn' onClick={scrollPhotosRight}>&#10095;</button>
        </div>
    );
}

export default Gallery;
