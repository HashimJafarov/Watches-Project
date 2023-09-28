import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Pagination from "../components/Pagination";
import Swal from "sweetalert2";
import styles from "./ProductsStyle.module.css";
function ProductByName({
  asidebasket,
  navMenu,
  company,
  products,
  loading,
  favorite,
  basket,
  dispatch,
}) {
  const { name, name_id } = useParams();
  const [page, setPage] = useState(1);
  const itemPerPage = 16;
  const filteredProducts = products.filter((a) => a.company_id === +name_id);
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
      title: "Məhsul səbətdən siıindi",
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
      {company.map((a) => {
        const check = a.id === +name_id;
        return (
          check && (
            <section
              key={a.id}
              className="probynamebg"
              style={{
                backgroundImage: `url(${a.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "550px",
              }}
            ></section>
          )
        );
      })}
      {!loading ? (
        <section className={styles.menwatches}>
          <div className="container">
            <div className={styles.menwatches_wrapper}>
              {filteredProducts.length ? (
                filteredProducts
                  .slice(
                    itemPerPage * (page - 1),
                    itemPerPage * (page - 1) + itemPerPage
                  )
                  .map((product) => {
                    const comp = company.find(
                      (c) => c.id === product.company_id
                    );
                    const checkBasket = basket.find((t) => t.id === product.id);
                    const checkFavorite = favorite.find(
                      (f) => f.id === product.id
                    );
                    return (
                      <div className={styles.product} key={product.id}>
                        <div className={styles.product_img}>
                          <div
                            style={
                              navMenu
                                ? { zIndex: "-1" }
                                : { zIndex: "1" } || asidebasket
                                ? { zIndex: "-1" }
                                : { zIndex: "1" }
                            }
                            className={styles.front_img}
                          >
                            <img src={product.images[0].image} alt="" />
                          </div>
                          <div
                            style={
                              navMenu
                                ? { zIndex: "-1" }
                                : { zIndex: "1" } || asidebasket
                                ? { zIndex: "-1" }
                                : { zIndex: "1" }
                            }
                            className={styles.side_img}
                          >
                            <img src={product.images[1].image} alt="" />
                          </div>
                          <div className={styles.product_img_btns}>
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
                  })
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
export default connect(t)(ProductByName);
