import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { connect } from "react-redux";
function About({ blog }) {
  return (
    <>
      <section
        className="about"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
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
      <section
        className="explore"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="about_explore">
            <div className="explore_titles">
              <p>Explore Now</p>
              <h2>MADE BY THE BEST HANDS WITH RICH HERITAGE</h2>
              <p>
                This is the best in class elegant watches from the luxury brand
                Swiss Eagle Watches. Take a peek look at it. Making History!
              </p>
              <button className="explore_btn">
                <Link to="/blog">View Full Story</Link>
              </button>
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
      <section className="about_blog">
        <div className="container">
          <p>Məlumat</p>
          <p>
            <span>Saatlar</span> Haqqında
          </p>
          <div className="about_blog_wrapper">
            {blog.length ? (
              blog
                .slice(0, 6)
                .reverse()
                .map((a) => (
                  <Link
                    to={`/blog/${a.id}`}
                    className="about_blog_product"
                    key={a.id}
                  >
                    <div className="about_blog_img">
                      <img src={a.head_img} alt="" />
                    </div>
                    <div className="about_blog_title">
                      <p>{a.about.toUpperCase()}</p>
                      <p>{a.title}</p>
                      <p>{a.part_one.slice(0, 100)}...</p>
                      {/* <Link to={`/blog/${a.id}`}>
                        <button>Read More</button>
                      </Link> */}
                    </div>
                  </Link>
                ))
            ) : (
              <div className="loading">
                <div className="load">
                  <div className="circle_one">
                    <div className="circle_two"></div>
                  </div>
                </div>
              </div>
            )}
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
const t = (a) => a;
export default connect(t)(About);
