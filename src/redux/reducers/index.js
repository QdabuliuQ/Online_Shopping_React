import { combineReducers } from "redux";
import cart from "./cart";
import address from "./address";
import order from "./order";

// 合并所有redux
const rootRedux = combineReducers({
  cart,
  address,
  order
})

export default rootRedux