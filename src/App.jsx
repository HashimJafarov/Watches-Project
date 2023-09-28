import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import AdminLayout from "./layouts/AdminLayout";
import Loading from "./components/Loading";
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
const AdminCategory = lazy(() => import("./admin/pages/AdminCategory"));
const AdminCategoryAdd = lazy(() =>
  import("./admin/pages/AdminCategoryAdd/AdminCategoryAdd")
);
const AdminCategoryEdit = lazy(() =>
  import("./admin/pages/AdminCategoryAdd/AdminCategoryEdit")
);
const AdminWatchesEdit = lazy(() =>
  import("./admin/pages/Watches/AdminWatchesEdit")
);
const AdminCompany = lazy(() => import("./admin/pages/AdminCompany"));
const AdminCompanyAdd = lazy(() =>
  import("./admin/pages/AdminCompanyAdd/AdminCompanyAdd")
);
const AdminCompanyEdit = lazy(() =>
  import("./admin/pages/AdminCompanyAdd/AdminCompanyEdit")
);
const AdminMovement = lazy(() => import("./admin/pages/AdminMovement"));
const AdminMovementAdd = lazy(() =>
  import("./admin/pages/AdminMovementAdd/AdminMovementAdd")
);
const AdminMovementEdit = lazy(() =>
  import("./admin/pages/AdminMovementAdd/AdminMovementEdit")
);
const AdminFunctionality = lazy(() =>
  import("./admin/pages/AdminFunctionality")
);
const AdminFunctionalityAdd = lazy(() =>
  import("./admin/pages/AdminFunctionalityAdd/AdminFunctionalityAdd")
);
const AdminFunctionalityEdit = lazy(() =>
  import("./admin/pages/AdminFunctionalityAdd/AdminFunctionalityEdit")
);
function App({ API_WATCHES, basket, favorite, dispatch }) {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  // console.log(basket);
  // console.log(favorite);
  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify(basket));
  // }, [basket]);
  // useEffect(() => {
  //   localStorage.setItem("favorite", JSON.stringify(favorite));
  // }, [favorite]);
  useEffect(() => {
    fetch(`${API_WATCHES}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: data,
        });
      });
  }, []);
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
      element: <Login />,
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
    // {
    //   path: "/control/register",
    //   element: <ControlRegister />,
    // },
    {
      path: "/control/watches",
      element: <ControlHome />,
    },
    {
      path: "/control/watches/add",
      element: <AddWatch />,
    },
    {
      path: "/control/watches/edit/:id",
      element: <AdminWatchesEdit />,
    },
    {
      path: "/control/category",
      element: <AdminCategory />,
    },
    {
      path: "/control/category/add",
      element: <AdminCategoryAdd />,
    },
    {
      path: "/control/category/edit/:id",
      element: <AdminCategoryEdit />,
    },
    {
      path: "/control/company",
      element: <AdminCompany />,
    },
    {
      path: "/control/company/add",
      element: <AdminCompanyAdd />,
    },
    {
      path: "/control/company/edit/:id",
      element: <AdminCompanyEdit />,
    },
    {
      path: "/control/movement",
      element: <AdminMovement />,
    },
    {
      path: "/control/movement/add",
      element: <AdminMovementAdd />,
    },
    {
      path: "/control/movement/edit/:id",
      element: <AdminMovementEdit />,
    },
    {
      path: "/control/functionality",
      element: <AdminFunctionality />,
    },
    {
      path: "/control/functionality/add",
      element: <AdminFunctionalityAdd />,
    },
    {
      path: "/control/functionality/edit/:id",
      element: <AdminFunctionalityEdit />,
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
              <Suspense fallback={<Loading />}>
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
              <Suspense fallback={<Loading />}>
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
    API_WATCHES: a.API_WATCHES,
  };
};
export default connect(t)(App);
