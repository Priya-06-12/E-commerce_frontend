import { configureStore, combineReducers } from "@reduxjs/toolkit";

// reducers import
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

// combine all reducers
const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  authState: authReducer,
  cartState: cartReducer,
  orderState: orderReducer,
  userState: userReducer,
});

// configure store
const store = configureStore({
  reducer,
  // middleware default thunk already include agum (extra ah kudukka thevai illa)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true, // 🔹 Redux DevTools enable
});

export default store;
