import { Table } from "antd";

const ShowTable = ({ datas, columns }) => {
  console.log(datas, columns);
  
  const data =  datas.map((data, index) => {
    data.key = index;
    return data;
  })

  console.log(data)
  return <Table style={{marginLeft:40}} columns={columns} pagination ={{pageSize: 5  }}   dataSource={datas} />;
};

export default ShowTable;
