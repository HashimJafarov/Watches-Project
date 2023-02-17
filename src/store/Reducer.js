const localBasket = localStorage.getItem("basket");
const localFavorite = localStorage.getItem("favorite");
const init = {
  products: [],
  category: [],
  company: [],
  blog: [],
  basket: localBasket ? JSON.parse(localBasket) : [],
  favorite: localBasket ? JSON.parse(localFavorite) : [],
  // favorite: [],
};
export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_COMPANY":
      return { ...state, company: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    case "SET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "SET_BLOG":
      return { ...state, blog: action.payload };
    default:
      return state;
  }
}
