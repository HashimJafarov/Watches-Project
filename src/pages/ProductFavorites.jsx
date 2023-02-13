import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Favoritebg from "../components/Favoritebg";
function ProductFavorites({ favorite, basket, products, dispatch }) {
  const removeFromFavor = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite.filter((t) => t.id !== id)],
    });
  };
  const addbasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };
  console.log(basket);
  return (
    <>
      <Favoritebg />
      <section className="favorite_list">
        <div className="container">
          <div className="favorite_wrapper">
            {favorite.length ? (
              favorite?.map((favor) => {
                const product = products.find(
                  (product) => favor.id === product.id
                );
                const findBasket = basket.find((b) => b.id === favor.id);
                return (
                  <div className="favorite_product" key={favor.id}>
                    <div className="favorite_img">
                      <img src={product?.frontimage} alt="" />
                    </div>
                    <div className="favorite_titles">
                      <p>
                        <Link to={`/product/${product?.id}`}>
                          {product?.title}
                        </Link>
                      </p>
                      <div className="favorite_btns">
                        <button onClick={() => removeFromFavor(favor?.id)}>
                          Delete
                        </button>
                        {!findBasket ? (
                          <button onClick={() => addbasket(favor.id)}>
                            Add to Basket
                          </button>
                        ) : (
                          <button>
                            <Link to="/card">Show Card</Link>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="card_price">
                      <p>
                        {product?.price}
                        <i className="fa-solid fa-manat-sign"></i>
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="card_empty">
                <div className="empty_img">
                  <img
                    src="https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png"
                    alt=""
                  />
                </div>
                <div className="empty_title">
                  <p>Favorite List is Empty</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ProductFavorites);
