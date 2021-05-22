import {combineReducers} from 'redux';
import employeeReducer from './employeeReducer'
import currentUserReducer from './currentUserReduer';
import  {productsReducer} from './productReducer';

const reducer=combineReducers({
    employees:employeeReducer,
    users:currentUserReducer,
    products: productsReducer,
})

export default reducer

