import { Table } from "antd";

const ShowTable = ({ datas, columns }) => {
  console.log(datas, columns);
  
  const data = datas.map((employee, index) => {
    employee.key = index;
    return employee;
  });

  return <Table style={{marginLeft:40}} columns={columns} pagination ={true} dataSource={data} />;
};

export default ShowTable;
