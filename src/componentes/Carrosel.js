import React, { useState } from "react";
import styled from "styled-components";
import vela1 from "../imagens/candly1.png"
import vela2 from "../imagens/candly2.png"
import vela3 from "../imagens/candly3.png"


const CarouselContainer = styled.div`
  width: 300px;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselItem = styled.img`
  width: 100%;
`;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    vela1,
    vela2,
    vela3
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselTrack
        style={{ transform: `translateX(-${currentIndex * 300}px)` }}
      >
        {images.map((image, index) => (
          <CarouselItem key={index} src={image} alt={`Imagem ${index + 1}`} />
        ))}
      </CarouselTrack>
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </CarouselContainer>
  );
}

export default Carousel;
