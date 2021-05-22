import { Form, Input, InputNumber, Button } from "antd";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const RenderInputField = (props) => {
  const { type } = props;
  return (
    <Form.Item {...props}>
      {type === "number" ? <InputNumber /> : <Input />}
    </Form.Item>
  );
};

export const RenderTextArea = (props) => {
  return (
    <Form.Item {...props}>
      <Input.TextArea />
    </Form.Item>
  );
};

export const RenderCheckBox = (props) => {
  return (
    <Form.Item {...props}>
      <Checkbox.Group>
        {props.values.map((value) => {
          return <Checkbox value={value}>{value}</Checkbox>;
        })}
      </Checkbox.Group>
    </Form.Item>
  );
};

export const RenderButton = (props) => {
  return (
    <Form.Item {...props} {...tailLayout}>
      {props.buttons.map((button) => {
        return <Button {...button}>{button.value}</Button>;
      })}
    </Form.Item>
  );
};
