import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
const Mensbg = lazy(() => import("../components/Mensbg"));
const Womenbg = lazy(() => import("../components/Womenbg"));
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Thumbs } from "swiper";
import PictureModal from "../components/PictureModal";
import Swal from "sweetalert2";
import StarRatings from "../components/StarRatings";
import { animate, AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/all";
import ProductStarRating from "../components/ProductStarRating";
import CommentStarRating from "../components/CommentStarRating";

function Product({
  asidebasket,
  navMenu,
  basket,
  movement,
  functionality,
  dispatch,
  setShowPicture,
  showPicture,
  products,
  category,
  API_WATCHES,
  blog,
  comments,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [prodescr, setProdescr] = useState(false);
  const [description, setDescription] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  // const [writeComments, setWriteComments] = useState(false);
  const [newComment, setNewComment] = useState({
    rate: 0,
    product_id: +id,
    name: "",
    comment: "",
    email: "",
    user_img:
      "https://www.gravatar.com/avatar/e647b85d28047927c3259f77bc48e16c?d=identicon&s=30",
    status: 0,
  });
  console.log(product);
  useEffect(() => {
    setLoading(true);
    fetch(`${API_WATCHES}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setLoading(false);
      });
  }, [id]);

  const checkDisabled =
    newComment.name.length < 5 ||
    newComment.comment.length < 5 ||
    newComment.email.length < 5;
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleRate = (currentValue) => {
    setNewComment({ ...newComment, rate: currentValue });
  };
  const saveComment = () => {
    comments.push({ ...newComment, id: comments.length + 1 });

    fetch(`http://localhost:1225/comments/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    setNewComment({
      rate: 0,
      product_id: +id,
      name: "",
      comment: "",
      email: "",
      user_img:
        "https://www.gravatar.com/avatar/e647b85d28047927c3259f77bc48e16c?d=identicon&s=30",
      status: 0,
    });
  };
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: +id, count: 1 }],
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
  const removeFromCard = (id) => {
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
  const detectChange = (a) => {
    console.log(a);
  };
  const check = basket.find((a) => a.id === +id);
  const checkAnotherProducts = products.filter(
    (a) => a.id !== +id && a.category_id === product.category_id
  );
  const findComment = comments.filter((a) => a.product_id === product.id);
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
              <div className="details_wrapper_all">
                <div className="details_wrapper_product">
                  <div className="details_wrapper">
                    <div
                      className="details_img"
                      style={
                        showPicture
                          ? { zIndex: "-1" }
                          : { zIndex: "1" } && navMenu
                          ? { zIndex: "-1" }
                          : { zIndex: "1" } && asidebasket
                          ? { zIndex: "-1" }
                          : { zIndex: "1" }
                      }
                    >
                      <Swiper
                        onClick={() => setShowPicture(true)}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        onSlideChange={detectChange}
                        className="details_swiper_up"
                      >
                        {product?.images?.map((image) => (
                          <SwiperSlide key={image.id}>
                            <img src={image.image} alt="" />
                          </SwiperSlide>
                        ))}
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
                        {product?.images?.map((image) => (
                          <SwiperSlide key={image.id}>
                            <img src={image.image} alt="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="details_specifications">
                      <div className="details_operations">
                        <div className="details_operation_titles">
                          <h2>{product.title}</h2>
                          {/* <StarRatings /> */}
                          <ProductStarRating id={id} />
                          <h3>
                            {product.price}
                            <i className="fa-solid fa-manat-sign"></i>
                          </h3>
                          <p style={{ fontSize: "18px" }}>
                            Discount: {product.discount}%
                          </p>
                        </div>
                        <div className="details_operations_wrap">
                          <div className="details_operations_input">
                            <h2>{check ? check.count : 0}</h2>
                          </div>
                          <div className="details_operations_math">
                            <button
                              disabled={!check}
                              onClick={() => changeCount(1)}
                            >
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
                                Səbətə at
                              </button>
                            ) : (
                              <button
                                onClick={() => removeFromCard(product.id)}
                              >
                                Səbətdən sil
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="details_operations_payment">
                          <div className="details_visa">
                            <img
                              src="https://media.az/file/articles/2019/11/06/1573031506_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="details_birkart">
                            <img
                              src="data:image/png;base64,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"
                              alt=""
                            />
                          </div>
                          <div className="details_ubank">
                            <img
                              src="https://play-lh.googleusercontent.com/LxrTk2Eq0vQseQirSnE4Vw23EuN9hRh0ZdN_Zd5HcvswaqCbH54PCPIT0k5DifA2vEU"
                              alt=""
                            />
                          </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="details_descr">
                    <div
                      className="details_descr_title"
                      onClick={() => setProdescr(!prodescr)}
                    >
                      <p>Məhsulun Xarakteristikası</p>
                      <IoIosArrowDown
                        style={
                          prodescr
                            ? { transform: "rotate(180deg)" }
                            : { transform: "rotate(0)" }
                        }
                      />
                    </div>
                    <div className="details_overflow">
                      <AnimatePresence>
                        {prodescr && (
                          <motion.div
                            initial={{ y: -1200 }}
                            animate={{ y: 0 }}
                            exit={{ y: -1200 }}
                            className="details_prodescr_demo"
                          >
                            <div className="details_prodescr">
                              {product.title ? (
                                <p>
                                  Modelin Adı: <span>{product.title}</span>
                                </p>
                              ) : null}
                              {product.model ? (
                                <p>
                                  Model: <span>{product.model}</span>
                                </p>
                              ) : null}
                              {product.categories ? (
                                <p>
                                  Kateqoriya:{" "}
                                  <span>{product.categories.name}</span>
                                </p>
                              ) : null}
                              {product.case_material ? (
                                <p>
                                  Material: <span>{product.case_material}</span>
                                </p>
                              ) : null}
                              {product.dial_material ? (
                                <p>
                                  Siferblatın materialı:{" "}
                                  <span>{product.dial_material}</span>
                                </p>
                              ) : null}
                              {product.diameter ? (
                                <p>
                                  Diametr: <span>{product.diameter}</span>
                                </p>
                              ) : null}
                              {product.shape ? (
                                <p>
                                  Siferblatın forması:{" "}
                                  <span>{product.shape}</span>
                                </p>
                              ) : null}
                              {product.color ? (
                                <p>
                                  Rəng: <span>{product.color}</span>{" "}
                                </p>
                              ) : null}
                              {product.dial ? (
                                <p>
                                  Siferblatın Rəngi: <span>{product.dial}</span>{" "}
                                </p>
                              ) : null}
                              {product.movements ? (
                                <p>
                                  Mexanizm:{" "}
                                  <span>{product.movements.name}</span>{" "}
                                </p>
                              ) : null}
                              {product.functionalities ? (
                                <p>
                                  Funksionallıq:{" "}
                                  <span>{product.functionalities.name}</span>
                                </p>
                              ) : null}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {product.description ? (
                      <div className="details_transition">
                        <div
                          className="details_descr_title"
                          onClick={() => setDescription(!description)}
                        >
                          <p>Məhsul Haqqında</p>
                          <IoIosArrowDown
                            style={
                              description
                                ? { transform: "rotate(180deg)" }
                                : { transform: "rotate(0)" }
                            }
                          />
                        </div>
                        <div className="details_overflow">
                          <AnimatePresence>
                            {description && (
                              <motion.div
                                initial={{ y: -300 }}
                                animate={{ y: 0 }}
                                exit={{ y: -300 }}
                                className="details_prodescr_demo"
                              >
                                <div className="details_description">
                                  <p>{product.description}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    ) : null}
                    {product.delivery ? (
                      <>
                        <div
                          className="details_descr_title"
                          onClick={() => setShipping(!shipping)}
                        >
                          <p>Çatdırılma</p>
                          <IoIosArrowDown
                            style={
                              shipping
                                ? { transform: "rotate(180deg)" }
                                : { transform: "rotate(0)" }
                            }
                          />
                        </div>
                        <div className="details_overflow">
                          <AnimatePresence>
                            {shipping && (
                              <motion.div
                                initial={{ y: -1200 }}
                                animate={{ y: 0 }}
                                exit={{ y: -1200 }}
                                className="details_prodescr_demo"
                              >
                                <div className="details_shipping">
                                  <p>{product.delivery}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className="details_another_products">
                    <p>Oxşar məhsullar</p>
                    <div className="details_another_products_wrap">
                      {checkAnotherProducts
                        .slice(0, 8)
                        .map((anotherproducts) => {
                          return (
                            <Link
                              to={`/product/${anotherproducts.id}`}
                              className="details_another_product"
                              key={anotherproducts.id}
                            >
                              <div className="details_another_img">
                                <img
                                  src={anotherproducts.images[0].image}
                                  alt=""
                                />
                              </div>
                              <div className="details_another_titles">
                                <p>{anotherproducts.title.slice(0, 25)}...</p>
                                <p>
                                  <i className="fa-solid fa-manat-sign"></i>{" "}
                                  {anotherproducts.price}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                  <div className="details_reviews">
                    <div className="details_descr_title">
                      <p>Rəylər</p>
                    </div>
                    <div className="details_overflow">
                      {!newComment.status && (
                        <button
                          onClick={() =>
                            setNewComment({ ...newComment, status: 1 })
                          }
                        >
                          Rəy yazmaq
                        </button>
                      )}
                      {!newComment.status ? (
                        <div className="comment_parts">
                          {findComment.length ? (
                            findComment.map((comment) => {
                              return (
                                <div className="review" key={comment.id}>
                                  <div className="review_user">
                                    <img src={comment.user_img} alt="" />
                                    <p>{comment.name}</p>
                                    <CommentStarRating id={comment.id} />
                                  </div>
                                  <p>{comment.comment}</p>
                                  <p>{comment.year}</p>
                                </div>
                              );
                            })
                          ) : (
                            <p>Rey yoxdu</p>
                          )}
                        </div>
                      ) : (
                        <div className="comment_write">
                          <div className="comment_rate">
                            <p>Məhsulu qiymətləndirin</p>
                            <div className="comment_stars">
                              <StarRatings
                                currentValue={currentValue}
                                setCurrentValue={setCurrentValue}
                                handleRate={handleRate}
                              />
                            </div>
                          </div>
                          <div className="comment_opinion">
                            <p>Rəyinizi bildirin</p>
                            <textarea
                              onChange={handleChange}
                              type="text"
                              name="comment"
                              required
                            ></textarea>
                          </div>
                          <div className="comment_name">
                            <p>Adınızı qeyd edin</p>
                            <input
                              onChange={handleChange}
                              type="text"
                              name="name"
                              required
                            />
                          </div>
                          <div className="comment_email">
                            <p>Email qeyd edin</p>
                            <input
                              onChange={handleChange}
                              type="email"
                              name="email"
                              required
                            />
                          </div>
                          <div className="comment_btns">
                            <button
                              onClick={() =>
                                setNewComment({ ...newComment, status: 0 })
                              }
                            >
                              Geri
                            </button>
                            <button
                              onClick={saveComment}
                              disabled={checkDisabled}
                            >
                              Təsdiq et
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="details_blog">
                  {/* <p>
                    <span>Saatlar</span> Haqqında
                  </p> */}
                  {blog.map((a) => (
                    <Link
                      to={`/blog/${a.id}`}
                      key={a.id}
                      className="blog_recent_product"
                    >
                      <div className="blog_recent_img">
                        <img src={a.head_img} alt="" />
                      </div>
                      <div className="blog_recent_title">
                        <p>{a.about}</p>
                        <p>{a.title}</p>
                      </div>
                    </Link>
                  ))}
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
const t = (a) => a;
export default connect(t)(Product);
//
