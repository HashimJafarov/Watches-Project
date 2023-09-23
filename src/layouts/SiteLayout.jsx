import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBasket from "../components/ProductBasket";
import NavMenu from "../components/NavMenu";
import { connect } from "react-redux";
function SiteLayout({ children, navMenu, asidebasket, dispatch }) {
  const setAsidebasket = () => {
    dispatch({
      type: "asideBasket",
      payload: !asidebasket,
    });
  };
  const setNavMenu = () => {
    dispatch({
      type: "navMenu",
      payload: false,
    });
  };
  const showPicture = () => {
    dispatch({
      type: "showPicture",
      payload: false,
    });
  };
  return (
    <>
      <Header
        setAsidebasket={setAsidebasket}
        setNavMenu={setNavMenu}
        showPicture={showPicture}
      />
      {navMenu && <NavMenu setNavMenu={setNavMenu} />}
      {asidebasket && <ProductBasket setAsidebasket={setAsidebasket} />}
      {children}
      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(SiteLayout);
