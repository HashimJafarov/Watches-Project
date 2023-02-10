// const localBasket = localStorage.getItem("basket");
const init = {
  products: [],
  category: [],
  company: [],
  basket: [],
  // basket: localBasket ? JSON.stringify(localBasket) : [],
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
    default:
      return state;
  }
}
