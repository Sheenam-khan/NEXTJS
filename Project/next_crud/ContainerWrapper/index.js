import React  from 'react'
import {Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
 
import TableComponent from '../Component/TableComponent';
import CardComponent from '../Component/CardComponent';
 

function Index({datas}) {
let {products}= useSelector(state => state.products) || []
    console.log("wrapper",products,datas,useSelector(state => state))
  

    return (
        <>
        <div className="site-card-border-less-wrapper">
        <Row gutter={16} justify="space-around"  style={{ marginTop: 19 }}>                 
        <CardComponent datas={datas}   product={products[0]}  />
        <CardComponent datas={datas}   product={products[1]} />
        <CardComponent datas={datas}   product={products[2]} />
        <CardComponent datas={datas}   product={products[3]} />
        </Row>
        </div>
         <div>
         <TableComponent datas={products}/>
         </div>
         </>
    )
}

export default Index
