import React, { useEffect, useState } from "react";
 import {Form,Input,Button} from 'antd'
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/actions/Action";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
 
const ShowForm = ({ ...props }) => {
  const [form] = Form.useForm();
  const [values, setValues] = useState("");
  // useEffect(() => {
  //   if (props.record.id != 0) {
  //     setValues({
  //       ...props.users.find((x) => x._id == props.currentId),
  //     });
  //   }
  // }, [props.currentId]);

  const dispatch=useDispatch();
  console.log(props,props.record);
  const onFinish = (values) => {
    console.log("Success:", values);
 
    if(props.type=="add"){
      props.addUserData(values);
      onReset()
    }
    else if(props.type=="update"){
      dispatch(updateUser(props.record._id,values))
      // props.editUserData(props.record._id ,values)
    }
    else onReset()

  
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setValues("");
  };

  const onFill = () => {
    form.setFieldsValue({
      name: "Seenam Bee",
      email: "khan@gmail.com",
    });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      initialValues={props.record || ""}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};


ShowForm.propTypes = {
  // createPostMessage: PropTypes.func,
  // updatePostMessage: PropTypes.func,
  // postMessageList: PropTypes.array,
};
export default ShowForm;
