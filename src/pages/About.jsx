import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about_promo">
            <div className="about_titles">
              <p>SWISS EAGLE COLLECTION</p>
              <h1>
                A WATCH DEFINES YOUR CHARACTER WHICH DEFINES YOUR ATTITUDE
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="container">
          <div className="about_explore">
            <div className="explore_titles">
              <p>Explore Now</p>
              <h2>MADE BY THE BEST HANDS WITH RICH HERITAGE</h2>
              <p>
                This is the best in class elegant watches from the luxury brand
                Swiss Eagle Watches. Take a peek look at it. Making History!
              </p>
              <button>View Full Story</button>
            </div>
            <div className="explore_position">
              <div className="explore_img">
                <img src="/images/woman2.jpg" alt="" />
                <div className="explore_img_title">
                  <p>Women's Style</p>
                  <h2>get your Luxurious Elegence</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsor">
        <div className="container">
          <div className="sponsor_descr">
            <p>
              We are commutity led, with a continued commitment to be the most
              responsible version of ourselves – and we never rest on our
              laurels.
            </p>
          </div>
          <div className="sponsor_wrap">
            <Swiper
              className="about_swiper"
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="about_slider">
                <img src="/logo/bvlgari.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about_slider">
                <img src="/logo/cartier.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about_slider">
                <img src="/logo/fossil.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about_slider">
                <img src="/logo/rolex.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about_slider">
                <img src="/logo/tissot.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="about_slider">
                <img src="/logo/tommyhilfiger.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
