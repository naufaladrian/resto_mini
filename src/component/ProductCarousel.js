import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Data from "../data.json";

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="w-100 h-50 mb-5"
      style={{ backgroundColor: "black" }}
    >
      {Data.map((e) => {
        return (
          <Carousel.Item key={e.id}>
            <img
              className="d-block mx-auto"
              src={e.image}
              alt={e.name}
              style={{ height: "450px" }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
