import React, { useState } from 'react';
import { Pagination } from 'antd';

 

function Paginations() {
const [current, setCurrent] = useState(1)

const onChange = page => {
  console.log(page);
 setCurrent({current:page})
};
function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  
    return (
          <Pagination current={current} total={50}       showSizeChanger
          showQuickJumper
          pageSize={20} showTotal={total => `Total ${total} items`}  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} onChange={onChange} itemRender={itemRender} /> 
     
    )
}

export default Paginations
