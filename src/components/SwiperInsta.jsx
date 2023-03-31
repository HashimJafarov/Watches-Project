import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function SwiperInsta() {
  return (
    <section className="swiper">
      <div className="container">
        <h2>@Watch.Store</h2>
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            521: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
  );
}

export default SwiperInsta;
