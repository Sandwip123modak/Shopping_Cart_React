import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer, ProductReducer } from "./Reducer";

const Cart = createContext();
faker.seed(123);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url("https://loremflickr.com"),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("myCart");
    if (localCartData === []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    // cart: [],
    cart: getLocalCartData(),
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(products);
  // console.log(state, "1");

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
