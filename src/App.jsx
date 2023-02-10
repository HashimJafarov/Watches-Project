import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsByCategory from "./pages/ProductsByCategory";
import ProductsByName from "./pages/ProductsByName";
import ProductBasket from "./components/ProductBasket";
import ProductDetail from "./components/ProductDetail";
import { connect } from "react-redux";
import ProductCard from "./pages/ProductCard";
function App({ basket, dispatch }) {
  const [asidebasket, setAsidebasket] = useState(false);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify(basket));
  // }, [basket]);
  useEffect(() => {
    fetch("http://localhost:1225/products")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: [...a],
        });
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:1225/company")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_COMPANY",
          payload: [...a],
        });
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:1225/category")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_CATEGORY",
          payload: [...a],
        });
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header setAsidebasket={setAsidebasket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/:category_name/:category_id"
          element={<ProductsByCategory />}
        />
        <Route path="/:name_id" element={<ProductsByName />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/card" element={<ProductCard />} />
      </Routes>
      {asidebasket && <ProductBasket setAsidebasket={setAsidebasket} />}
      <Footer />
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
  };
};
export default connect(t)(App);
