import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
const colors = {
  orange: "ffbb5a",
  grey: "a9a9a9",
};
function ProductStarRating({ products, id }) {
  const currentRate = products.length ? products.find((a) => a.id === +id) : 5;
  const stars = Array(5).fill(0);
  return (
    <div className="star_ratings">
      {currentRate || commentRate
        ? stars.map((_, index) => {
            return (
              // <div
              //   key={index}
              //   // onClick={() => handleClick(index + 1)}
              //   // onMouseOver={() => handleMouseOver(index + 1)}
              //   // onMouseLeave={handleMouseLeave}
              //   // style={
              //   //   currentValue > index
              //   //     ? { backgroundColor: "#3a3a3a", color: "#f7f7f7" }
              //   //     : { backgroundColor: "#f7f7f7", color: "#a9a9a9" }
              //   // }
              //   className="star_rate"
              // >
              <FaStar
                key={index}
                color={currentRate.rate > index ? colors.orange : colors.grey}
              />
              // </div>
            );
          })
        : stars.map((_, index) => {
            return <FaStar key={index} />;
          })}
    </div>
  );
}
const t = (a) => a;
export default connect(t)(ProductStarRating);
