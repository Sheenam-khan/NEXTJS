import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../../Redux/actions/Action";

export const dispatcher = (values) => {
  const dispatch = useDispatch();
  return dispatch(editEmployee(values));
};
