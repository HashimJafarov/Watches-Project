import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Home({ category, dispatch }) {
  return (
    <>
      <section
        className="home_promo"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="promo">
            <div className="titles">
              <p>Empire Collection</p>
              <h1>The Watch Everyone Desires!</h1>
              <p>
                the best in class elegant watches from the luxury brand swiss
                eagle high quality watches from into which a lot of care has
                gone in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="all_watches"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="watches_wrap">
            {category.map((a) => (
              <Link
                to={`/${a.name.toLowerCase()}/${a.id}`}
                className="watches_collection"
                key={a.id}
              >
                <img src={a.image} alt="" />
                <h2>{a.title}</h2>
              </Link>
            ))}
            {/* <Link className="watches_collection">
              <img src="/images/mens.jpg" alt="" />
              <h2>Men's Collection</h2>
            </Link>
            <Link className="watches_collection">
              <img src="/images/womens.jpg" alt="" />
              <h2>Women's Collection</h2>
            </Link>
            <Link className="watches_collection">
              <img src="/images/kids.jpg" alt="" />
              <h2>Kid's Collection</h2>
            </Link> */}
          </div>
        </div>
      </section>
      <section className="home_spring">
        <div className="container">
          <div className="home_spring_wrap">
            <div
              className="spring_img"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="img_first">
                <img src="/images/woman4.jpg" alt="" />
              </div>
              <div className="img_second">
                <img src="/images/menn.jpg" alt="" />
              </div>
            </div>
            <div
              className="spring_descr"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h2>Spring Winter 2023</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <button>Shop the Look</button>
            </div>
          </div>
        </div>
      </section>
      <section className="limited">
        <div className="container">
          <div className="limited_wrap">
            <p>10% Off & The Best Indie Art Ever!</p>
            <h2>
              Be The First To <br /> Get Limited Editions
            </h2>
            <button>Shop new collection</button>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="container">
          <div className="feature_titles">
            <h2>Feature Product</h2>
            <p>
              Hurry up to own our best products on the occasion of discounts to
              give to friends and relatives
            </p>
          </div>
          <div className="feature_wrap">
            <div className="feature_product">
              <div className="product_img">
                <img
                  src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/14-300x300.jpg"
                  alt=""
                />
                <div className="product_btns">
                  <button>how</button>
                  <button>are</button>
                  <button>you</button>
                </div>
              </div>
              <div className="product_title">
                <p>Cocomi</p>
                <h2>Timex Easy Reader White</h2>
                <p>$225</p>
              </div>
            </div>
            <div className="feature_product">
              <div className="product_img">
                <img
                  src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/14-300x300.jpg"
                  alt=""
                />
                <div className="product_btns">
                  <button>how</button>
                  <button>are</button>
                  <button>you</button>
                </div>
              </div>
              <div className="product_title">
                <p>Cocomi</p>
                <h2>Timex Easy Reader White</h2>
                <p>$225</p>
              </div>
            </div>
            <div className="feature_product">
              <div className="product_img">
                <img
                  src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/14-300x300.jpg"
                  alt=""
                />
                <div className="product_btns">
                  <button>how</button>
                  <button>are</button>
                  <button>you</button>
                </div>
              </div>
              <div className="product_title">
                <p>Cocomi</p>
                <h2>Timex Easy Reader White</h2>
                <p>$225</p>
              </div>
            </div>
            <div className="feature_product">
              <div className="product_img">
                <img
                  src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/14-300x300.jpg"
                  alt=""
                />
                <div className="product_btns">
                  <button>how</button>
                  <button>are</button>
                  <button>you</button>
                </div>
              </div>
              <div className="product_title">
                <p>Cocomi</p>
                <h2>Timex Easy Reader White</h2>
                <p>$225</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="swiper">
        <div className="container">
          <h2>@Watch.Store</h2>
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src="/images/swiperphoto/hand1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/hand2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/hand3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/images.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/img2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/men2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/mens.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/woman1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/woman2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swiperphoto/woman3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Home);
