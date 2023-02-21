import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import ProductFavorites from "./pages/ProductFavorites";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
function App({ basket, favorite, dispatch }) {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  const [asidebasket, setAsidebasket] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

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
  useEffect(() => {
    fetch("http://localhost:1225/blog")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_BLOG",
          payload: [...a],
        });
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header setAsidebasket={setAsidebasket} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/:category_name/:category_id"
          element={<ProductsByCategory />}
        />
        <Route path="/:name_id" element={<ProductsByName />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              setShowPicture={setShowPicture}
              showPicture={showPicture}
            />
          }
        />
        <Route path="/card" element={<ProductCard />} />
        <Route path="/favorites" element={<ProductFavorites />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {asidebasket && <ProductBasket setAsidebasket={setAsidebasket} />}
      <Footer />
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
    favorite: a.favorite,
  };
};
export default connect(t)(App);
