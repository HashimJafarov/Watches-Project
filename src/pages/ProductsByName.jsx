import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function ProductByName({
  company,
  products,
  loading,
  favorite,
  basket,
  dispatch,
}) {
  const { name_id } = useParams();
  console.log(name_id);
  const filteredProducts = products.filter((a) => a.company_id === +name_id);
  console.log(filteredProducts);
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
  };
  const addFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite, { id: id }],
    });
  };
  const removeFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite.filter((t) => t.id !== id)],
    });
  };
  console.log(favorite);
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
                backgroundImage: `url(${a.bgimage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "350px",
              }}
            ></section>
          )
        );
      })}
      {!loading ? (
        <section className="menwatches">
          <div className="container">
            <div className="menwatches_wrapper">
              {filteredProducts.length ? (
                filteredProducts.reverse().map((product) => {
                  const comp = company.find((c) => c.id === product.company_id);
                  const checkBasket = basket.find((t) => t.id === product.id);
                  const checkFavorite = favorite.find(
                    (f) => f.id === product.id
                  );
                  return (
                    <div className="product" key={product.id}>
                      <div className="product_img">
                        <div className="front_img">
                          <img src={product.frontimage} alt="" />
                        </div>
                        <div className="side_img">
                          <img src={product.sideimage} alt="" />
                        </div>
                        <div className="product_img_btns">
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
