import { ACTION_TYPES } from "../actions/actionType";

const initialState = {
  employees: [
    // { employeeName: "Employee 1", employeeDepartment: ".NET Team" },
  ],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees,...action.payload],
      };

    case ACTION_TYPES.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case ACTION_TYPES.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((x) =>
          x._id == action.payload._id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((x) => x._id != action.payload),
      };

    default:
      return state;
  }
};

export default employeeReducer;
