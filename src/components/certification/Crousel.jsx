 import React, { useState, useEffect, useRef } from "react";
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
  const certifications = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const slideWidth = 200 + 40; // width + gap

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certifications.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full overflow-hidden md:w-[85%] h-40">
      <div
        ref={containerRef}
        className="flex gap-10 transition-transform duration-500"
        style={{
          transform: `translateX(-${index * slideWidth}px)`,
        }}
      >
        {[0, 1, 2, 3].map((offset) => {
          const cert = certifications[(index + offset) % certifications.length];
          return (
            <img
              key={cert.id}
              src={cert.image}
              alt={`certificate-${cert.id}`}
              className="w-[200px] h-[120px] object-contain"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
