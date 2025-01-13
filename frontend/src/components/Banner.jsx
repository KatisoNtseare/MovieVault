import { useState, useEffect } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { bannerData } from './BannerData';

function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [isAutoChanging, setIsAutoChanging] = useState(true);  // Control auto-change behavior

  const goToNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  const goToPreviousBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length);
  };

  const toggleAutoChange = () => {
    setIsAutoChanging((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (isAutoChanging) {
      interval = setInterval(goToNextBanner, 10000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isAutoChanging]);

  const handlePlayClick = () => {
    setIsAutoChanging((prev) => !prev); //stop auto change
    setIsTrailerPlaying(true); // Start playing the trailer when clicked
  };

  const handleCloseTrailer = () => {
    setIsTrailerPlaying(false);  
    setIsAutoChanging(true); 
  };

  return (
    <div className="banner">
      <img
        src={bannerData[currentBannerIndex].imageSrc}
        alt={bannerData[currentBannerIndex].title}
      />
      <div className="banner-text">
        <h2>{bannerData[currentBannerIndex].title}</h2>

        <div className="data">
          <button className="prev" onClick={goToPreviousBanner}>
            <FaChevronLeft />
          </button>

          <ul>
            <li id="rate">{bannerData[currentBannerIndex].rate}</li>
            <li id="duration">{bannerData[currentBannerIndex].duration}</li>
            <li id="Country">{bannerData[currentBannerIndex].country}</li>
            <li id="year">{bannerData[currentBannerIndex].year}</li>
          </ul>

          <button className="next" onClick={goToNextBanner}>
            <FaChevronRight />
          </button>
        </div>

        <div className="description">
          <p>{bannerData[currentBannerIndex].description}</p>
        </div>

        <div className="creds">
          <p><span id="creds-title">Starring</span><span id='creds-info'>{bannerData[currentBannerIndex].actors}</span></p>
          <p><span id="creds-title">Genres </span><span id='creds-info'>{bannerData[currentBannerIndex].genres}</span></p>
          <p><span id="creds-title">Director</span><span id='creds-info'>{bannerData[currentBannerIndex].director}</span></p>
        </div>

        <div className="play">
          <button onClick={handlePlayClick}>Watch trailer <CiPlay1 /></button>
        </div>

        {/* Conditionally render the YouTube trailer */}
        {isTrailerPlaying && (
          <div className="trailer-overlay">
            <div className="trailer-container">
              <button className="close-trailer" onClick={handleCloseTrailer}>X</button>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${new URL(bannerData[currentBannerIndex].youtubeTrailerLink).searchParams.get('v')}?autoplay=1`}
                title="YouTube trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        
        {/* Toggle button to start/stop auto change */}
        {/*<div className="auto-change-toggle">
          <button onClick={toggleAutoChange}>
            {isAutoChanging ? 'Stop Auto Change' : 'Start Auto Change'}
          </button>
        </div>*/}
      </div>
    </div>
  );
}

export default Banner;
