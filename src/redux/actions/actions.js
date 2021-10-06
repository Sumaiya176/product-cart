import { actionTypes } from "./action-Type"

export const setProducts = (products) => {
   return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
   }
}

export const productDetails = (product) => {
    return {
     type: actionTypes.PRODUCT_DETAIL,
     payload: product
    }
 }

 export const removeProducts = () => {
    return {
     type: actionTypes.REMOVE_PRODUCT
    }
 }