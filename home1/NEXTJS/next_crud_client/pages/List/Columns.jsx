import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ShowForm from '../../components/FormBuilder/ShowForm'
import ShowModal from '../../components/ModalComponent/ShowModal'
// import { fields } from "./FormFields";

let onDelete;
export const callBack = (deleteUserData) => {
  onDelete = deleteUserData;
};

let onEdit;
export const editCallBack = (editUserData) => {
  onEdit = editUserData;
};

export const columns = [
  
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action, record, rowIndex) => (
      <span>
        {console.log(record)}
        <ShowModal
          title="update"
           >
          <ShowForm
            type="update"
            // fields={fields}
            // key={record.id}
            record={record}
            editUserData={onEdit(record._id)}
          />
        </ShowModal>

        <Button
          icon={<DeleteOutlined />}
          type="danger"
          onClick={() => onDelete(record._id)}
        />
      </span>
    ),
  },
];
