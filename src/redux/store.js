import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducers/newsReducer";

const store = createStore(newsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
