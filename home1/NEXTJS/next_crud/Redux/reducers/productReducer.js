import { ADD_SELECT_PRODUCT, REMOVE_SELECT_PRODUCT, MAKE_PRIMARY_PRODUCT } from "../actions/actionType";
 

let products=[]
 products=typeof window !== 'undefined'? JSON.parse(localStorage.getItem("productItems")||"[]"):[]
const initialState = {
  products: products||[]
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_SELECT_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
     
      };

    case REMOVE_SELECT_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
    
        ),
        primary:true

      };

   case MAKE_PRIMARY_PRODUCT:
      return {
        ...state, 
        products: [action.payload, ...state.products.filter(product => product !== action.payload)]
      };
    default:
      return state;
  }
};


// case FILTER_PRODUCTS_BY_SIZE:
//   return {
//     ...state,
//     size: action.payload.size,
//     filteredItems: action.payload.items,
//   };
// case ORDER_PRODUCTS_BY_PRICE:
//   return {
//     ...state,
//     sort: action.payload.sort,
//     filteredItems: action.payload.items,
//   };
// case FETCH_PRODUCTS:
// return { items: action.payload, filteredItems: action.payload };
