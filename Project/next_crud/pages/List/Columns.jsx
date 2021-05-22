import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ShowModal from "../../component/ModalComponent/ShowModal";
import ShowForm from "../../component/FormBuilder/ShowForm";
import { fields } from "./FormFields";

let onDelete;
export const callBack = (deleteEmployeeData) => {
  onDelete = deleteEmployeeData;
};

let onEdit;
export const editCallBack = (editEmployeeData) => {
  onEdit = editEmployeeData;
};

export const columns = [
  {
    title: "Name",
    dataIndex: "employeeName",
    key: "name",
  },
  {
    title: "Department Name",
    dataIndex: "employeeDepartment",
    key: "departmentName",
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
          record={record}
 
        >
          <ShowForm
            type="update"
            fields={fields}
            key={record.id}
            record={record}
            editEmployeeData={onEdit}
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
