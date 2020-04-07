import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import cartreducer from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartreducer
});
