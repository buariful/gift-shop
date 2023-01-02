import { applyMiddleware, createStore } from "redux";
import orderReducer from "./reducer/orderReducr";
import thunk from "redux-thunk";

const store = createStore(orderReducer, applyMiddleware(thunk));

export default store;
