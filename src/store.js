import { applyMiddleware, createStore } from "redux";
import orderReducer from "./reducer/orderReducr";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  orderReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
