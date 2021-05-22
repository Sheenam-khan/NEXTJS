import React, { useState } from "react";
import { Table, Checkbox } from "antd";
import { useSelector } from "react-redux";

const TableComponent = ({ datas }) => {
  const { products } = useSelector((state) => state.products);

  const [checked, setchecked] = useState(false);

  let column;
  let dataSource = [];
  let newArray = [];

  const columns = [
    {
      title: "Name",
      dataIndex: "property",
      key: "name",
      render: (text) => <h1 id="columnProperty">{text}</h1>,
      width: 150,
    },
    {
      title: "1st",
      dataIndex: "property",
      key: "1st",
      render: (text) => (products[0] ? products[0][text] : " - "),
      width: 150,
    },
    {
      title: "2nd",
      dataIndex: "property",
      key: "2nd",
      render: (text) => (products[1] ? products[1][text] : " - "),
      width: 150,
    },
    {
      title: "3rd",
      dataIndex: "property",
      key: "3rd",
      render: (text) => (products[2] ? products[2][text] : " - "),
      width: 150,
    },
    {
      title: "4th",
      dataIndex: "property",
      key: "4th",
      render: (text) => (products[3] ? products[3][text] : " - "),
      width: 150,
    },
  ];

  if (products[0]) {
    products.map((data, index) => {
      column = [...new Set(Object.keys(data))];
      column.sort();
    });
  }

  if (column !== undefined) {
    column.forEach((data, index) => {
      // console.log("data", data);
      if (data !== "image" && data !== "id") {
        let obj = {
          title: data,
          property: data,
          key: index,
          render: (text) =><h1  id="columnProperty">{column[text]}</h1>
        };
        dataSource.push(obj);
        // console.log("DataSource", dataSource);
      }
    });
  }

  const compare = () => {
    for (let i = 1; i < products.length; i++) {
      Object.keys(products[i]).some((key) => {
        console.log("d", key);
        if (key !== "image" && key !== "id") {
          if (products[i][key] !== products[i - 1][key]) {
            newArray = [...new Set([...newArray, key])];
          }
        }
      });
    }
  };


  const RowColor = (record) => {
     console.log(record,newArray,newArray.indexOf(record.property));
    if (newArray.indexOf(record.property) > -1) {
      return "colorRow";
    }
  };

  if (products.length > 1) {
    if(checked){
      compare();
    }  
  }

  const showDifference = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setchecked(true)
  };

  return (
    <>
      <Checkbox
        style={{ margin: 20, fontFamily: "Arial" }}
        onChange={(e) => showDifference(e)}
      >
        <span
          style={{ fontSize: "1.2rem", color: "#00152", fontWeight: "bold" }}
        >
         
          Show Differences
        </span>
      </Checkbox>
      <br />
      <div>
        <Table
          rowClassName={RowColor}
          // style={{ position: 'absolute', top:"y", left: "x" }}

          pagination={false}
          width={150}
          showHeader={false}
          dataSource={dataSource}
          columns={columns}
          locale={{ emptyText: "No product Selected" }}
        />
      </div>
    </>
  );
};

export default TableComponent;
