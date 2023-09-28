import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import styles from "./ProductsStyle.module.css";
function Home({
  category,
  products,
  navMenu,
  asidebasket,
  company,
  favorite,
  basket,
  dispatch,
}) {
  const featuredProducts = products.filter((t) => t.featured === 1);
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul səbətə əlavə olundu",
    });
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul səbətdən silindi",
    });
  };
  const addFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite, { id: id }],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul sevimlilərə elavə olundu",
    });
  };
  const removeFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite.filter((t) => t.id !== id)],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Məhsul sevimlilərdən silindi",
    });
  };
  const firstImg = "/images/prime.jpg";
  const secondImg = "https://wallpapercave.com/wp/wp2168389.jpg";
  return (
    <>
      <section
        className="home_promo"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="container">
              <div className="promo">
                <div className="titles">
                  <p>Məhşur Kolleksiyalar</p>
                  <h1>Hamının Arzuladığı Saat!</h1>
                  <p>
                    Saat dünyasının lüks brendlərindən olan ən yaxşı və yüksək
                    keyfiyyətli saatlar.
                  </p>
                  <button>
                    <Link to="/allproducts">Bütün məhsullar</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="promo">
                <div className="titles">
                  <p>Məhşur Kolleksiyalar</p>
                  <h1>Hamının Arzuladığı Saat!</h1>
                  <p>
                    Saat dünyasının lüks brendlərindən olan ən yaxşı və yüksək
                    keyfiyyətli saatlar.
                  </p>
                  <button>
                    <Link to="/allproducts">Bütün məhsullar</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* <section
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
      </section> */}

      <section
        style={
          navMenu
            ? { zIndex: "-1" }
            : { zIndex: "1" } || asidebasket
            ? { zIndex: "-1" }
            : { zIndex: "1" }
        }
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
                <h2>{a.name}</h2>
              </Link>
            ))}
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
              data-aos="fade-up"
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
      <section className={styles.menwatches} id="feature">
        <div className="container">
          <div id="feature_titles">
            <h2>Feature Product</h2>
            <p>
              Hurry up to own our best products on the occasion of discounts to
              give to friends and relatives
            </p>
          </div>
          <div className={styles.menwatches_wrapper}>
            {featuredProducts.map((product) => {
              const comp = company.find((c) => product.company_id === c.id);
              const checkBasket = basket.find((t) => t.id === product.id);
              const checkFavorite = favorite.find((f) => f.id === product.id);
              return (
                <div className={styles.product} key={product.id}>
                  <div className={styles.product_img}>
                    <div className={styles.front_img}>
                      <img src={product.images[0].image} alt="" />
                    </div>
                    <div className={styles.side_img}>
                      <img src={product.images[1].image} alt="" />
                    </div>
                    <div className={styles.product_img_btns}>
                      {!checkFavorite ? (
                        <button onClick={() => addFavorite(product.id)}>
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      ) : (
                        <button onClick={() => removeFavorite(product.id)}>
                          <i className="fa-solid fa-heart-crack"></i>
                        </button>
                      )}
                      {!checkBasket ? (
                        <button onClick={() => addBasket(product.id)}>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                      ) : (
                        <button onClick={() => removeBasket(product.id)}>
                          <i className="fa-solid fa-x"></i>
                        </button>
                      )}
                      <button>
                        <Link to={`/product/${product.id}`}>
                          <i className="fa-regular fa-eye"></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className={styles.product_descr}>
                    <h2>{comp && comp.name}</h2>
                    <p>
                      {product.title && product.title.slice(0, 35)}
                      ...
                    </p>
                    <span>
                      <p>
                        {product.price}
                        <i className="fa-solid fa-manat-sign"></i>
                      </p>
                    </span>
                  </div>
                </div>
              );
            })}
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
    </>
  );
}
const t = (a) => a;
export default connect(t)(Home);
