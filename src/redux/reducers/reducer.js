const initialState = {
    products: [],
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.payload};
            default: 
            return state;
    }
}

export const singleProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAIL':
            return {...state, ...action.payload};
        case 'REMOVE_PRODUCT':
            return {};    
            default: 
            return state;
    }
}