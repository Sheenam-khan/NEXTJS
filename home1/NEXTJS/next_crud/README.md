This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- 
//   const initialState={
//     id:0,
//     employeeName:'',
//     employeeDepartment:''
//   }

//   const [employee, setEmployee] = useState(initialState)

//    const dispatch=useDispatch();
// const {employees}=useSelector(state=>state.employees)
// // console.log(useSelector(state=>state.employees))
// // console.log(employees,dispatch,getEmployee(),deleteEmployee())

//   //  useEffect(() => {
//        // dispatch(getEmployee())
 
//   //  }, [])
 
//    const clearData=()=>{
//      setEmployee({id:'',employeeName:'',employeeDepartment:''})
//    }

// const deleteEmployeeData=(id)=>{
// clearData();
// dispatch(deleteEmployee(id))
// }

// callBack(deleteEmployeeData)


// const handleInputChange=(e)=>{
//   const {name,value}=e.target
//   setEmployee({...employee, [name]:value})
// }

// const submitData=(e)=>{
// e.preventDefault();
// console.log(employee)
// if( !employee.id ){
// const newEmployee = {  
//   id: employees.length+1,  
//   employeeName: employee.employeeName,  
//   employeeDepartment: employee.employeeDepartment,  
// };  
// setEmployee({newEmployee})
// dispatch(addEmployee(newEmployee))
// }

// else if( employee.id ){
//   const updatedDetails = {  
//     id:employee.id,
//     employeeName: employee.employeeName,  
//     employeeDepartment: employee.employeeDepartment,  
//   };  

//   dispatch(editEmployee(updatedDetails));  
   
// }else {  
//   alert('Enter Employee Details.');  
// } 
// clearData();  
// }

// const editDetails=(data)=>{
// setEmployee({
//   id:data.id,
//   employeeName:data.employeeName,
//   employeeDepartment:data.employeeDepartment
// })
// }
// console.log(employees)
//    return (
//     <div className="App"> 
//     <ShowModal title="add"/>
//  <ShowTable datas={employees} columns={columns}/>
//     <div >  
//             Employee Name : <input name="employeeName" onChange={handleInputChange} value={employee.employeeName} type="text" placeholder="Employee Name" /> <br />  
//             Employee Department :  <input name="employeeDepartment" onChange={handleInputChange} value={employee.employeeDepartment} type="text" placeholder="Employee Department" /><br />  
//             {employee.id ? <button onClick={submitData}>UPDATE</button> : 
//             <button onClick={submitData}>ADD</button>  }
//    <button onClick={clearData}>CLEAR</button>  
//           </div>  
//             <table border="1">  
//               <thead>  
//                 <tr>  
//                   <th>ID</th>  
//                   <th>Name</th>  
//                   <th>Depatment Name</th>  
//                   <th>Action(s)</th>  
//                 </tr>  
//               </thead>  
//               <tbody>  
//                 { employees.map((data,index)=>{
//                    return <tr key={(index + 1)}>  
//                      <td>{(index + 1)}</td>  
//                      <td>{data.employeeName}</td>  
//                      <td>{data.employeeDepartment}</td>  
//                      <td><button onClick={() => editDetails(data)}>EDIT</button> 
//                      <button onClick={() => deleteEmployeeData(data.id)}>DELETE</button> </td>  
//                    </tr>  
//                 } ) }  
//               </tbody>  
//             </table>  
    
//       </div>
//    ) -->