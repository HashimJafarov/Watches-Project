import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import AdminLayout from "./layouts/AdminLayout";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProductsByCategory = lazy(() => import("./pages/ProductsByCategory"));
const ProductsByName = lazy(() => import("./pages/ProductsByName"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProductCard = lazy(() => import("./pages/ProductCard"));
const ProductFavorites = lazy(() => import("./pages/ProductFavorites"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductsByMovement = lazy(() => import("./pages/ProductsByMovement"));
const ProductsByFunctionality = lazy(() =>
  import("./pages/ProductsByFunctionality")
);
const Customers = lazy(() => import("./pages/Customers"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ControlLogin = lazy(() => import("./admin/pages/Login"));
const ControlHome = lazy(() => import("./admin/pages/Home"));
const AddWatch = lazy(() => import("./admin/pages/Watches/Add"));
function App() {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  const siteRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "allproducts",
      element: <AllProducts />,
    },
    {
      path: "/:category_name/:category_id",
      element: <ProductsByCategory />,
    },
    {
      path: "/products/:name/:name_id",
      element: <ProductsByName />,
    },
    {
      path: "/movement/:name/:id",
      element: <ProductsByMovement />,
    },
    {
      path: "/functionality/:name/:id",
      element: <ProductsByFunctionality />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/card",
      element: <ProductCard />,
    },
    {
      path: "/favorites",
      element: <ProductFavorites />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id",
      element: <BlogDetails />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/customers/:name/:id",
      element: <Customers />,
    },
    {
      path: "/login",
      element: <Customers />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];
  const adminRoutes = [
    {
      path: "/control/login",
      element: <ControlLogin />,
    },
    {
      path: "/control/watches",
      element: <ControlHome />,
    },
    {
      path: "/control/watches/add",
      element: <AddWatch />,
    },
  ];
  return (
    <>
      <Routes>
        {siteRoutes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <SiteLayout>{a.element}</SiteLayout>
              </Suspense>
            }
          />
        ))}
        {adminRoutes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <AdminLayout>{a.element}</AdminLayout>
              </Suspense>
            }
          />
        ))}
      </Routes>
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
