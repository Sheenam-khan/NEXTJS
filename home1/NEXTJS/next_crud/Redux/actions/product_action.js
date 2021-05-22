import {
    ADD_SELECT_PRODUCT,
    REMOVE_SELECT_PRODUCT,
    MAKE_PRIMARY_PRODUCT,
  } from "./actionType";
  
  export const addSelectProduct = (data) => {
    console.log("action", data);
    let obj=[]
    obj=[...obj,data]
    localStorage.setItem("productItems",JSON.stringify(obj))
    return (dispatch) => {
      return dispatch({
        type: ADD_SELECT_PRODUCT,
        payload: data,
      });
    };
  };
  
  export const deleteSelectProduct = (id) => {
    console.log("action", id);
    localStorage.setItem("productItems",JSON.stringify(id))
    return (dispatch) => {
      return dispatch({
        type: REMOVE_SELECT_PRODUCT,
        payload: id,
      });
    };
  };
  
  export const makePrimaryProduct = (data) => {
    console.log("action", data);
    return (dispatch) => {
      return dispatch({
        type: MAKE_PRIMARY_PRODUCT,
        payload: data,
      });
    };
  };
  