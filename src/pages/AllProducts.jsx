import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/all";
import { animate, AnimatePresence, motion } from "framer-motion";

function AllProducts({
  products,
  category,
  company,
  basket,
  favorite,
  movement,
  functionality,
  navMenu,
}) {
  const [brands, setBrands] = useState(false);
  const [cat, setCat] = useState(false);
  const [move, setMove] = useState(false);
  const [func, setFunc] = useState(false);
  const [page, setPage] = useState(1);
  const itemPerPage = 15;
  const [filter, setFilter] = useState({
    brand: [],
    category: [],
    movement: [],
    functionality: [],
  });
  const handleChange = (e) => {
    let n = e.target.name;
    let c = e.target.checked;
    let v = +e.target.value;
    if (c) {
      setFilter({ ...filter, [n]: [...filter[n], v] });
      return;
    }
    setFilter({ ...filter, [n]: [...filter[n].filter((a) => a !== v)] });
  };
  const filterProducts = products.filter(
    (a) =>
      (!filter.brand.length || filter.brand.includes(a.company_id)) &&
      (!filter.category.length || filter.category.includes(a.category_id)) &&
      (!filter.movement.length || filter.movement.includes(a.movement_id)) &&
      (!filter.functionality.length ||
        filter.functionality.includes(a.functionality_id))
  );
  return (
    <>
      <section className="allprobg"></section>
      <section className="menwatches allproducts">
        <div className="container">
          <div className="allproducts_wrapper">
            <div className="allpro_filters">
              <div className="allpro_brands">
                <div
                  className="allpro_title"
                  onClick={() => setBrands(!brands)}
                >
                  <p>Brendlər</p>
                  <IoIosArrowDown
                    style={
                      brands
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0)" }
                    }
                  />
                </div>
                <div className="allpro_overflow">
                  <AnimatePresence>
                    {brands && (
                      <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        exit={{ y: -500 }}
                        className="allpro_motion"
                      >
                        {company.length
                          ? company.map((comp) => {
                              return (
                                <div className="allpro_brand" key={comp.id}>
                                  <input
                                    type="checkbox"
                                    name="brand"
                                    value={comp.id}
                                    checked={filter.brand.includes(comp.id)}
                                    id={comp.title}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor={comp.title}>
                                    <div className="checkbox"></div>
                                    {comp.name}
                                  </label>
                                </div>
                              );
                            })
                          : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="allpro_categories">
                <div className="allpro_title" onClick={() => setCat(!cat)}>
                  <p>Kategoriya</p>
                  <IoIosArrowDown
                    style={
                      cat
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0)" }
                    }
                  />
                </div>
                <div className="allpro_overflow">
                  <AnimatePresence>
                    {cat && (
                      <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        exit={{ y: -500 }}
                        className="allpro_motion"
                      >
                        {category.length
                          ? category.map((cat) => {
                              return (
                                <div className="allpro_category" key={cat.id}>
                                  <input
                                    type="checkbox"
                                    name="category"
                                    checked={filter.category.includes(cat.id)}
                                    id={cat.title}
                                    onChange={handleChange}
                                    value={cat.id}
                                  />
                                  <label htmlFor={cat.title}>{cat.title}</label>
                                </div>
                              );
                            })
                          : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="allpro_moves">
                <div className="allpro_title" onClick={() => setMove(!move)}>
                  <p>Mexanizm</p>
                  <IoIosArrowDown
                    style={
                      move
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0)" }
                    }
                  />
                </div>
                <div className="allpro_overflow">
                  <AnimatePresence>
                    {move && (
                      <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        exit={{ y: -500 }}
                        className="allpro_motion"
                      >
                        {movement.length
                          ? movement.map((move) => {
                              return (
                                <div className="allpro_move" key={move.id}>
                                  <input
                                    type="checkbox"
                                    name="movement"
                                    value={move.id}
                                    checked={filter.movement.includes(move.id)}
                                    id={move.title}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor={move.title}>
                                    {move.title}
                                  </label>
                                </div>
                              );
                            })
                          : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="allpro_funcs">
                <div className="allpro_title" onClick={() => setFunc(!func)}>
                  <p>Funksionallıq</p>
                  <IoIosArrowDown
                    style={
                      func
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0)" }
                    }
                  />
                </div>
                <div className="allpro_overflow">
                  <AnimatePresence>
                    {func && (
                      <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        exit={{ y: -500 }}
                        className="allpro_motion"
                      >
                        {functionality.length
                          ? functionality.map((func) => {
                              return (
                                <div className="allpro_func" key={func.id}>
                                  <input
                                    type="checkbox"
                                    name="functionality"
                                    value={func.id}
                                    checked={filter.functionality.includes(
                                      func.id
                                    )}
                                    id={func.title}
                                    onChange={handleChange}
                                  />
                                  <label htmlFor={func.title}>
                                    {func.title}
                                  </label>
                                </div>
                              );
                            })
                          : null}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div className="menwatches_wrapper">
              {products.length ? (
                filterProducts.length ? (
                  filterProducts
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
          </div>
          {products.length ? (
            <Pagination
              setPage={setPage}
              page={page}
              itemCount={products.length}
              itemPerPage={itemPerPage}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(AllProducts);
