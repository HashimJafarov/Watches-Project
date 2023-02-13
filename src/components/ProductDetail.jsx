import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Mensbg from "./Mensbg";
import Womenbg from "./Womenbg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Thumbs } from "swiper";
import PictureModal from "./PictureModal";

function Product({ basket, dispatch, setShowPicture, showPicture }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:1225/products/${id}`)
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setLoading(false);
      });
  }, []);
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: +id, count: 1 }],
    });
  };
  const removeFromCard = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
  };
  const changeCount = (c) => {
    let f = basket.find((a) => a.id === +id);
    f.count += c;
    if (!f.count) {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((t) => t.id !== +id)],
      });
      return;
    }
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const check = basket.find((a) => a.id === +id);
  return (
    <>
      {product.category_id === 1 && <Mensbg />}
      {product.category_id === 2 && <Womenbg />}
      {!loading ? (
        <>
          {showPicture && (
            <PictureModal
              setShowPicture={setShowPicture}
              id={id}
              product={product}
            />
          )}
          <section className="details">
            <div className="container">
              <div className="details_wrapper">
                {product.video ? (
                  <div className="details_video">
                    <video
                      src={product.video}
                      muted
                      controls
                      autoPlay
                      loop
                      width="350"
                      height="200"
                    ></video>
                  </div>
                ) : null}
                <div
                  className="details_img"
                  style={showPicture ? { zIndex: "-1" } : { zIndex: "1" }}
                >
                  <Swiper
                    onClick={() => setShowPicture(true)}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="details_swiper_up"
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
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="details_swiper_down"
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
                <div className="details_descr">
                  <h2>{product.title}</h2>
                  <h3>
                    {product.price} <i className="fa-solid fa-manat-sign"></i>
                  </h3>
                  <div className="details_description">
                    <p>{product.description}</p>
                    <p>{product.quality}</p>
                  </div>
                  <div className="details_descr_social">
                    Share:
                    <Link className="details_social">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link className="details_social">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link className="details_social">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                  <div className="details_operations">
                    <div className="details_operations_input">
                      <h2>{check ? check.count : 0}</h2>
                    </div>
                    <div className="details_operations_math">
                      <button disabled={!check} onClick={() => changeCount(1)}>
                        +
                      </button>
                      <button
                        disabled={basket.count === 0}
                        onClick={() => changeCount(-1)}
                      >
                        -
                      </button>
                    </div>
                    <div className="details_operations_btn">
                      {!check ? (
                        <button onClick={() => addBasket(product.id)}>
                          Add to card
                        </button>
                      ) : (
                        <button onClick={() => removeFromCard(product.id)}>
                          Remove from card
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="details_comments">
            <div className="container">
              <div className="comments_wrapper">
                <div className="comments_list"></div>
                <div className="comments_inputs">
                  <div className="input_name">
                    <input type="text" />
                  </div>
                  <div className="input_text">
                    <textarea name="comment"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="loading">
          <div className="load">
            <div className="circle_one">
              <div className="circle_two"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
  };
};
export default connect(t)(Product);
