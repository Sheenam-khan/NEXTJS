import React from "react";
import { Form } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  RenderButton,
  RenderCheckBox,
  RenderInputField,
  RenderTextArea,
} from "./InputFieldCheck";

import { editEmployee } from "../../Redux/actions/Action";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ShowForm = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  console.log("showForm", props);
  console.log("edit", props.editEmployeeData);
  const onFinish = (values) => {
    console.log("Success:", values);

    if (props.type == "add") {
      console.log("add", props.addEmployeeData);
      // dispatch(addEmployee(values))
      props.addEmployeeData(values);
    }
     else if (props.type == "update") {
      console.log("edit", values);
      dispatch(editEmployee(props.record._id, values));
      //  props.editEmployeeData(values);
    };
    onReset()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  const RenderFormField = ({ field, index }) => {
    switch (field.type) {
      case "text":
      case "number":
        return <RenderInputField key={index} {...field} />;

      case "textArea":
        return <RenderTextArea key={index} {...field} />;

      case "checkbox":
        return <RenderCheckBox key={index} {...field} />;

      case "button":
        return <RenderButton key={index} {...field} />;

      default:
        return null;
    }
  };

  const { fields } = props;
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      initialValues={props.record}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {fields.map((field, index) => {
        return <RenderFormField key={index} field={field} index={index} />;
      })}
    </Form>
  );
};

export default ShowForm;
