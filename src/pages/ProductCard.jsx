import React from "react";
import { connect } from "react-redux";
import Cardbg from "../components/Cardbg";
import { Link } from "react-router-dom";
function ProductCard({ basket, products, loading, dispatch }) {
  const removeFromCard = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
  };
  const increaseCount = (id) => {
    let f = basket.find((a) => a.id === +id);
    f.count += 1;
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  const decreaseCount = (id) => {
    let f = basket.find((a) => a.id === +id);
    f.count -= 1;
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
  const total = basket.reduce(
    (acc, item) =>
      acc + products.find((a) => a.id === item.id)?.price * item.count,
    0
  );
  return (
    <>
      <Cardbg />
      <section className="card">
        <div className="container">
          <div className="card_wrapper">
            {basket.length ? (
              products.length ? (
                <div className="card_total">
                  <p>
                    Total Price:{" "}
                    <span>
                      {total} <i className="fa-solid fa-manat-sign"></i>
                    </span>
                  </p>
                </div>
              ) : null
            ) : null}
            <div className="card_products">
              {basket.length ? (
                basket.map((a) => {
                  const product = products.find((b) => a.id === b.id);
                  return (
                    <>
                      <div className="card_product" key={a?.id}>
                        <div className="card_img">
                          <img src={product?.frontimage} alt="" />
                        </div>
                        <div className="card_titles">
                          <p>
                            <Link to={`/product/${product?.id}`}>
                              {product?.title}
                            </Link>
                          </p>
                          <div className="card_title">
                            <button onClick={() => decreaseCount(a.id)}>
                              -
                            </button>
                            <p>{a?.count}</p>
                            <button onClick={() => increaseCount(a.id)}>
                              +
                            </button>
                          </div>
                          <div className="card_btns">
                            <button onClick={() => removeFromCard(a.id)}>
                              Delete
                            </button>
                            <button>Buy</button>
                          </div>
                        </div>
                        <div className="card_price">
                          <p>
                            {product?.price * a?.count}{" "}
                            <i className="fa-solid fa-manat-sign"></i>
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="card_empty">
                  <div className="empty_img">
                    <img
                      src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
                      alt=""
                    />
                  </div>
                  <div className="empty_title">
                    <p>Cart is Empty</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ProductCard);
