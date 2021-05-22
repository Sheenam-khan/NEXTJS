import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  addEmployee,
  editEmployee,
  getEmployee,
} from "../Redux/actions/Action";
import { Row, Col } from "antd";
import { Avatar, Layout, Button, Table, Typography, Card } from "antd";
import ShowTable from "../component/TableComponent/ShowTable";
import ShowModal from "../component/ModalComponent/ShowModal";
import ShowForm from "../component/FormBuilder/ShowForm";
import { callBack, editCallBack, columns } from "./List/Columns";
import { fields } from "../pages/List/FormFields";
import ShowSlider from "../component/MenuComponent";
import Autoset from "../component/Avatar";
import SimpleSlider from "../component/React_Slick";
import UploadImage from "../component/Avatar/upload";
import ContainerWrapper from "../ContainerWrapper";
import data from "../data.json";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const { items } = data;
  const [flipkart, setFlipkart] = useState(true);
  const users = useSelector((state) => state.users);

  const { employees } = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  console.log(users);
  console.log(employees);
  const editEmployeeData = (data) => {
    console.log("eddition", data);
    dispatch(editEmployee(data));
  };

  const addEmployeeData = (data) => {
    console.log("addition", data);
    dispatch(addEmployee(data));
  };

  editCallBack(editEmployeeData);

  const deleteEmployeeData = (id) => {
    console.log(id);
    dispatch(deleteEmployee(id));
  };
  callBack(deleteEmployeeData);

  const buttonText = !flipkart ? "Show Flipkart Functionality" : "CRUD";
  const onChangeFlipkart = () => {
    setFlipkart(flipkart ? false : true);
  };
  return (
    <Layout>
      <Header className="site-layout-background">
        
        <div style={{display:"flex"}} className="site-layout-background">
        <Button onClick={onChangeFlipkart} type="primary">
          {buttonText}
        </Button>
        {flipkart ? (

          <h1 style={{ color: "white" ,fontSize:"35px" ,marginLeft:"1300px",fontStyle: "italic" }}>Glass door</h1>
          
        ) : (
          <Autoset />
        )}

        </div>
      </Header>

      <Layout>
        <Content>
          {flipkart ? (
            <ContainerWrapper datas={items} />
          ) : (
            <>
              {" "}
              <br />
              <UploadImage />
              <br />
              <br />
              <ShowModal title="add">
                <ShowForm
                  type="add"
                  fields={fields}
                  addEmployeeData={addEmployeeData}
                />
              </ShowModal>
              <ShowTable datas={employees} columns={columns} />
            </>
          )}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Created By Seenam Khan</Footer>
    </Layout>
  );
};

export default App;
