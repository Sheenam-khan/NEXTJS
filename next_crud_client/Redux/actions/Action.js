import  {ACTION_TYPES} from './actionType'
import axios from 'axios';

const url="http://localhost:6000/user/";

export const fetchAll=()=> dispatch=> {

  axios.get(url + "get")
        .then(res => {
            console.log(res.data)
       dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data
    })
})
.catch(err => console.log(err))
    
};

export const createUser=(data)=>dispatch=>{ 
    console.log("requestdata",data) 
    axios.post(url+"add",data) 
        .then(res => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
   
} ; 


export const updateUser=(id,updatedData)=>dispatch=> { 
    console.log("updateData",id,updatedData) 
   axios.put(url+"update/"+id,updatedData)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
};  

  
export const deleteUser=(id)=>dispatch=> {  
    axios.delete(url+"delete/"+id)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
    })
    .catch(err => console.log(err))
}; 


export const getAvatar=(string,userData)=>dispatch=>{
    return dispatch({
        type:ACTION_TYPES.GET_AVATAR,
        payload:userData
    })
}
