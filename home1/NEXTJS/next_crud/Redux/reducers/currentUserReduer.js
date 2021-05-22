import { ACTION_TYPES } from "../actions/actionType";

const initialState = {
  currentUserReducer:null
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {

      case ACTION_TYPES.GET_AVATAR:
        return {
          ...state,
          currentUserReducer:action.payload
        }

        case ACTION_TYPES.ADD_AVATAR:
          return{
            ...state,
            currentUserReducer: action.payload
          }

    default:
      return state;
  }
};

export default currentUserReducer;
