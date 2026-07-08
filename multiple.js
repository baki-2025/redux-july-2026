const { createStore,combineReducers } = require("redux");

//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//products states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
  
};

//cart states
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1
};
//products actions
const getProducts = () => {
  return {
  type: "GET_PRODUCTS",
  
  }
}

const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  }
}

//cart actions
const getCartItems = () => {
  return {
    type: "GET_CART_ITEMS",
    
  }
}

const addCartItem = (product) => {
  return {
    type: "ADD_CART_ITEM",
    payload: product
  }
}

//productReducer
const productReducer = (state = initialProductState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };
        default:
          return state;
    }
};

//cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return {
                ...state
            };
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };
        default:
          return state;
    }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer
});

//store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("rice"));
store.dispatch(addProduct("wheat"));
store.dispatch(getCartItems());
store.dispatch(addCartItem("salt"));
store.dispatch(addCartItem("rice"));