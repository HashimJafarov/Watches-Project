const localBasket = localStorage.getItem("basket");
const localFavorite = localStorage.getItem("favorite");
const init = {
  asidebasket: false,
  navMenu: false,
  showPicture: false,
  user: null,
  admin: null,
  products: [],
  category: [],
  company: [],
  blog: [],
  movement: [],
  functionality: [],
  comments: [],
  customers: [],
  subcustomers: [],
  basket: localBasket ? JSON.parse(localBasket) : [],
  favorite: localBasket ? JSON.parse(localFavorite) : [],
};
export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "asideBasket":
      return { ...state, asidebasket: action.payload };
    case "navMenu":
      return { ...state, navMenu: action.payload };
    case "showPicture":
      return { ...state, showPicture: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: action.payload };
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
    case "SET_MOVEMENT":
      return { ...state, movement: action.payload };
    case "SET_FUNCTIONALITY":
      return { ...state, functionality: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "SET_CUSTOMERS":
      return { ...state, customers: action.payload };
    case "SET_SUBCUSTOMERS":
      return { ...state, subcustomers: action.payload };
    default:
      return state;
  }
}
