import { combineReducers } from "redux";
import {productReducer, singleProductReducer} from "./reducer";


export const reducers = combineReducers({
    allProducts: productReducer,
    product: singleProductReducer
});