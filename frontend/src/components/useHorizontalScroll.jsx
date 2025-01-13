

function ScrollButtons({ containerRef }) {
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-button left" onClick={scrollLeft}>←</button>
      <button className="scroll-button right" onClick={scrollRight}>→</button>
    </div>
  );
}

export default ScrollButtons;
