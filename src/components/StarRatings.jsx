import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
const colors = {
  orange: "ffba5a",
  grey: "a9a9a9",
};
function StarRatings() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div className="star_ratings">
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}
export default StarRatings;
