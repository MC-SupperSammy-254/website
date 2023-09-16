import React, { useEffect, useRef} from 'react';
import event1Video from '../assets/videos/event 1.mp4';
import event2Video from '../assets/videos/event 2.mp4';
import event3Video from '../assets/videos/event 3.mp4';
import event4Video from '../assets/videos/event 4.mp4';
import event5Video from '../assets/videos/event 5.mp4';
import event6Video from '../assets/videos/event 6.mp4';
import "../styles/Videos.css"

function Videos() {
  const videosRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const videosEl = videosRef.current;


    const handlePrevClick = () => {
      const videoWidth = videosEl.querySelector('video').offsetWidth;
      const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
      videosEl.scrollBy({
          left: -(videoWidth + videoMargin),
          behavior: 'smooth'
      });
  };
  
  const handleNextClick = () => {
      const videoWidth = videosEl.querySelector('video').offsetWidth;
      const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
      videosEl.scrollBy({
          left: videoWidth + videoMargin,
          behavior: 'smooth'
      });
  };
  

    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);

    return () => {
    prevBtn.removeEventListener('click', handlePrevClick);
    nextBtn.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <div className='portfolio'>
      <h2>Event Videos</h2>
     <div className="videos-container">
       <button id="videoPrevBtn" className="nav-btn" ref={prevBtnRef}>&#10094;</button>

    <div className="videos" ref={videosRef}>
     <video width="320" height="240" controls>
      <source src={event1Video} type="Video/mp4" />
     </video>

     <video width="320" height="240" controls>
      <source src={event2Video} type="Video/mp4" />
     </video>

     <video width="320" height="240" controls>
      <source src={event3Video} type="Video/mp4" />
     </video>

     <video width="320" height="240" controls>
      <source src={event4Video} type="Video/mp4" />
     </video>

     <video width="320" height="240" controls>
      <source src={event5Video} type="Video/mp4" />
     </video>

     <video width="320" height="240" controls>
      <source src={event6Video} type="Video/mp4" />
     </video>

  </div>
  <button id="videoNextBtn" className="nav-btn" ref={nextBtnRef}>&#10095;</button>

  </div>

  </div>
  )
}

export default Videos;
