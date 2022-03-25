import { createStore } from "redux";
import handleCart from "./reducers/cartReducer";

export default createStore(handleCart);
