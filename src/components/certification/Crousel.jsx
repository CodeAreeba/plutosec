 import React, { useEffect, useRef } from "react";
import img1 from "../../assets/certificate1.webp";
import img2 from "../../assets/certificate2.webp";
import img3 from "../../assets/certificate3.webp";
import img4 from "../../assets/certificate4.webp";
import img5 from "../../assets/certificate5.webp";
import img6 from "../../assets/certificate6.webp";
import img7 from "../../assets/certificate7.webp";
import img8 from "../../assets/certificate8.webp";
import img9 from "../../assets/certificate9.webp";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const visibleCount = 4;
  const itemWidth = 200;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentTranslate = 0;

    const slide = () => {
      
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = `translateX(-${itemWidth}px)`;

      const onTransitionEnd = () => {
        container.style.transition = "none";
        container.style.transform = `translateX(0px)`;

       
        const first = container.children[0];
        container.appendChild(first);

        container.removeEventListener("transitionend", onTransitionEnd);
      };

      container.addEventListener("transitionend", onTransitionEnd);
    };

    const interval = setInterval(slide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[800px] h-[120px] overflow-hidden mx-auto relative">
      <div ref={containerRef} className="flex">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`certificate-${idx}`}
            className="w-[200px] h-[120px] object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;