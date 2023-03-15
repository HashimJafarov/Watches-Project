import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
function StarRatings({ currentValue, setCurrentValue, handleRate }) {
  const stars = Array(5).fill(0);
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
          <div
            key={index}
            onClick={() => {
              handleClick(index + 1);
              handleRate(index + 1);
            }}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            style={
              (hoverValue || currentValue) > index
                ? { backgroundColor: "#3a3a3a", color: "#f7f7f7" }
                : { backgroundColor: "#f7f7f7", color: "#a9a9a9" }
            }
            className="star_rate"
          >
            <FaStar />
          </div>
        );
      })}
    </div>
  );
}
export default StarRatings;
