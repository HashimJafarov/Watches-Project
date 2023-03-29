import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mensbg from "../components/Mensbg";
import Womenbg from "../components/Womenbg";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Pagination from "../components/Pagination";
import Swal from "sweetalert2";

AOS.init();
function Blog({
  asidebasket,
  navMenu,
  products,
  company,
  category,
  favorite,
  loading,
  basket,
  dispatch,
}) {
  const { category_name, category_id } = useParams();
  const [inputSearch, setInputSearch] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [page, setPage] = useState(1);
  const itemPerPage = 16;
  useEffect(() => {
    const findPrice = products.length
      ? Math.max(...products.map((a) => +a.price))
      : 1000000;
    console.log(findPrice);
    setInputValue({ ...inputValue, maxPrice: findPrice });
  }, []);
  const filteredProducts = products.filter((a) => {
    return (
      a.category_id === +category_id &&
      a.title.toLowerCase().includes(inputValue.name.toLowerCase()) &&
      +a.price >= +inputValue.minPrice &&
      +a.price <= +inputValue.maxPrice
    );
  });
  const changePrice = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
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
      title: "Məhsul sevimlilərə əlavə olundu",
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
  return (
    <>
      {+category_id === 1 ? <Mensbg /> : null}
      {+category_id === 2 ? <Womenbg /> : null}
      {!loading ? (
        <section className="menwatches">
          <div className="container">
            <div className="filter_wrapper">
              <div className="btn">
                <button onClick={() => setInputSearch(!inputSearch)}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              {inputSearch && (
                <div data-aos="fade-rigth" className="input">
                  <input
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={inputValue.name}
                    name="name"
                    type="text"
                    placeholder="Search..."
                  />
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min"
                    value={inputValue.minPrice}
                    onChange={changePrice}
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max"
                    value={inputValue.maxPrice}
                    onChange={changePrice}
                  />
                </div>
              )}
            </div>
            <div className="menwatches_wrapper">
              {products.length ? (
                filteredProducts.length ? (
                  filteredProducts
                    .slice(
                      itemPerPage * (page - 1),
                      itemPerPage * (page - 1) + itemPerPage
                    )
                    .map((product) => {
                      const comp = company.find(
                        (c) => c.id === product.company_id
                      );
                      const checkBasket = basket.find(
                        (t) => t.id === product.id
                      );
                      const checkFavorite = favorite.find(
                        (f) => f.id === product.id
                      );
                      return (
                        <div className="product" key={product.id}>
                          <div className="product_img">
                            <div
                              style={
                                navMenu
                                  ? { zIndex: "-1" }
                                  : { zIndex: "1" } || asidebasket
                                  ? { zIndex: "-1" }
                                  : { zIndex: "1" }
                              }
                              className="front_img"
                            >
                              <img src={product.frontimage} alt="" />
                            </div>
                            <div
                              style={
                                navMenu
                                  ? { zIndex: "-1" }
                                  : { zIndex: "1" } || asidebasket
                                  ? { zIndex: "-1" }
                                  : { zIndex: "1" }
                              }
                              className="side_img"
                            >
                              <img src={product.sideimage} alt="" />
                            </div>
                            <div className="product_img_btns">
                              {!checkFavorite ? (
                                <button onClick={() => addFavorite(product.id)}>
                                  <i className="fa-regular fa-heart"></i>
                                </button>
                              ) : (
                                <button
                                  onClick={() => removeFavorite(product.id)}
                                >
                                  <i className="fa-solid fa-heart-crack"></i>
                                </button>
                              )}
                              {!checkBasket ? (
                                <button onClick={() => addBasket(product.id)}>
                                  <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                              ) : (
                                <button
                                  onClick={() => removeBasket(product.id)}
                                >
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
                          <div className="product_descr">
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
                    })
                ) : (
                  <h2>Axtarış Nəticə vermədi</h2>
                )
              ) : (
                <h2>Məhsul yoxdur</h2>
              )}
            </div>
            {filteredProducts.length ? (
              <Pagination
                setPage={setPage}
                page={page}
                itemCount={filteredProducts.length}
                itemPerPage={itemPerPage}
              />
            ) : null}
          </div>
        </section>
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
export default connect(t)(Blog);
