import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import useBreakpoints from '../UserBreakPoint/useBreakpoint';
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children,...props }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const point = useBreakpoints();
  const updateIndex = (newIndex) => {
  
  if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

//comment this function to remove the autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });


  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * point}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: `${point}%` });
        })}
      </div>
      <div className="indicators">

        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
		
         <FontAwesomeIcon className="icon" color="#31135E" icon={faArrowLeft} />
        </button>
       
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
         <FontAwesomeIcon className="icon" color="#31135E" icon={faArrowRight} />
        </button>
      </div>
    </div>
	
  );
};

export default Carousel;
