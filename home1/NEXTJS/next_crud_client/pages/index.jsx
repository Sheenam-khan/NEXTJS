import React ,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAll,
  createUser,
  updateUser,
  getAvatar,
  deleteUser
} from "../Redux/actions/Action";
  
import { callBack,editCallBack ,columns } from "./List/Columns";
import ShowTable from '../components/TableComponent/ShowTable' 
import ShowModal from '../components/ModalComponent/ShowModal'
import ShowForm from '../components/FormBuilder/ShowForm'

const App = (props) => {
  console.log(props);

  const dispatch = useDispatch();

const users=useSelector((state)=>state.users.list)
console.log(users)

useEffect(() => {
 dispatch(fetchAll())
}, [])

  const editUserData = (id,data) => {
    console.log("eddition", data);
    dispatch(updateUser(id,data));
  };

  editCallBack(editUserData)

  const addUserData = (data) => {
    console.log("addition", data);
    dispatch(createUser(data));
  };
 

  const deleteUserData = (id) => {
    dispatch(deleteUser(id));
  };
  callBack(deleteUserData);


  console.log( useSelector((state)=>state.users.list))
  
  return (
  <div>
      
      <ShowModal title="add" >
        <ShowForm
        type="add"
        addUserData={addUserData}  
        />
      </ShowModal>
         <ShowTable datas={users} columns={columns} /> 
         </div>
      
  
  );
};

export default App;
