import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper";
import { connect } from "react-redux";
function PictureModal({ setShowPicture, id, product }) {
  return (
    <div className="picture">
      <div className="picture_show">
        <button className="picture_close" onClick={() => setShowPicture(false)}>
          X
        </button>
        <div className="picture_swipers">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="picture_swiper"
          >
            {product.frontimage ? (
              <SwiperSlide>
                <img src={product.frontimage} />
              </SwiperSlide>
            ) : null}
            {product.sideimage ? (
              <SwiperSlide>
                <img src={product.sideimage} />
              </SwiperSlide>
            ) : null}
            {product.backimage ? (
              <SwiperSlide>
                <img src={product.backimage} />
              </SwiperSlide>
            ) : null}
            {product.handimage ? (
              <SwiperSlide>
                <img src={product.handimage} />
              </SwiperSlide>
            ) : null}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(PictureModal);
