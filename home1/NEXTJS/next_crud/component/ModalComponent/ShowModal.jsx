import React, { useState, Children } from "react";
import { Modal, Button } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const ShowModal = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  console.log(props);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  console.log(props, props.title);
  const { title, children } = props;
  return (
    <div style={{ marginBottom: 20,marginTop:20}}>
      <Button
        type="primary"
        onClick={showModal}
        icon={title === "update" ? <EditOutlined /> : <PlusOutlined />}
      >
        {title === "update" ? "" : title}
      </Button>
      <Modal
        title={`${title} modal `}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </div>
  );
};

ShowModal.propTypes = {
  title: PropTypes.string,
};

export default ShowModal;
