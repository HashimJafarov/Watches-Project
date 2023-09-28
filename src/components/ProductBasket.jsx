import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ProductBasket({ products, basket, setAsidebasket }) {
  const total = basket.length
    ? basket.reduce((acc, item) => {
        const productPrice = products.find((a) => a.id === item.id)?.price;
        const productDiscount = products.find(
          (a) => a.id === item.id
        )?.discount;
        return (
          acc +
          productPrice -
          ((productPrice * productDiscount) / 100) * item.count
        );
      }, 0)
    : null;
  return (
    <>
      <aside
        className="aside_basket"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
        <button className="aside_close" onClick={() => setAsidebasket(false)}>
          X
        </button>
        <div className="basket_products">
          {basket.length ? (
            products.length ? (
              basket.map((a) => {
                const product = products.find((t) => t.id === a.id);
                return (
                  <>
                    <div className="basket_product" key={a.id}>
                      <div className="basket_img">
                        <img src={product?.images[0].image} alt="" />
                      </div>
                      <div className="basket_titles">
                        <p>{product?.title.slice(0, 45)}...</p>
                        <div className="basket_title">
                          <p>
                            Count: <span>{a.count}</span>
                          </p>
                          <p>
                            {product?.price * a.count}{" "}
                            <i className="fa-solid fa-manat-sign"></i>
                          </p>
                          <p>Discount {product?.discount}%</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <p className="aside_error">Error</p>
            )
          ) : (
            <p className="aside_empty">Card is Empty</p>
          )}
        </div>
        {basket.length ? (
          products.length ? (
            <div className="aside_total">
              Total price:{" "}
              <span>
                {total} <i className="fa-solid fa-manat-sign"></i>
              </span>
            </div>
          ) : null
        ) : null}
        <Link to="/card">
          <button onClick={() => setAsidebasket(false)} className="aside_view">
            View Card
          </button>
        </Link>
      </aside>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ProductBasket);
