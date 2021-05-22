import  {ACTION_TYPES} from './actionType'
import  api from '../api'

 

export const getEmployee=()=>dispatch=>{
 

    api.employeeDetails().fetchAll()
        .then(res => {
       dispatch({
        type:ACTION_TYPES.GET_EMPLOYEE,
        payload: res.data
    })
})
.catch(err => console.log(err))

};

export const addEmployee=(data)=>dispatch=>{ 
    console.log("requestdata",data) 
    api.employeeDetails().create(data)
        .then(res => {
        dispatch({
            type: ACTION_TYPES.ADD_EMPLOYEE,
            payload: res?.data
        })
    })
    .catch(err => console.log(err))
};

export const editEmployee=(id,updatedData)=>dispatch=> { 
    console.log("updateData",id,updatedData) 
    
    api.employeeDetails().update(id,updatedData)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.EDIT_EMPLOYEE,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
     
};  

  
export const deleteEmployee=(id)=> dispatch=> {  
    console.log(id)
api.employeeDetails().delete(id)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.DELETE_EMPLOYEE,
            payload: id
        })
    })
    .catch(err => console.log(err))
      
}; 


export const getAvatar=(string,userData)=>dispatch=>{
    console.log(string,userData)
    return dispatch({
        type:ACTION_TYPES.GET_AVATAR,
        payload:userData
    })
}

export const addAvatar=(userData)=>dispatch=>{
    console.log(userData)
    return dispatch({
        type:ACTION_TYPES.ADD_AVATAR,
        payload:userData
    })
}
