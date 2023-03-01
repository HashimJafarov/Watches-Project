import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Pagination from "../components/Pagination";
import Swal from "sweetalert2";
function ProductsByFunctionality({
  asidebasket,
  navMenu,
  products,
  basket,
  functionality,
  category,
  loading,
  company,
  favorite,
  dispatch,
}) {
  const { name, id } = useParams();
  const [page, setPage] = useState(1);
  const itemPerPage = 16;
  const filteredFunc = products.filter((a) => a.functionality_id === +id);
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
      {functionality.map((a) => {
        const check = a.id === +id;
        return (
          check && (
            <section
              key={a.id}
              className="probynamebg"
              style={{
                backgroundImage: `url(${a.bgimage})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "350px",
                backgroundAttachment: "fixed",
              }}
            ></section>
          )
        );
      })}
      {!loading ? (
        <section className="menwatches">
          <div className="container">
            <div className="menwatches_wrapper">
              {filteredFunc.length ? (
                filteredFunc
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
                <h2>Mal yoxdur</h2>
              )}
            </div>
            {filteredFunc.length ? (
              <Pagination
                setPage={setPage}
                page={page}
                itemCount={filteredFunc.length}
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
export default connect(t)(ProductsByFunctionality);
