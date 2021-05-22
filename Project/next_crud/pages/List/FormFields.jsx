export const fields = [
  {
    label: "Name",
    name: "employeeName",
    type: "text",
    rules: [
      {
        required: true,
        message: "Please input your username!",
      },
    ],
  },
  {
    label: "Department",
    name: "employeeDepartment",
    type: "textArea",
    rules: [
      {
        required: true,
        message: "Please input department name",
      },
    ],
  },
  {
    type: "button",
    buttons: [{ type: "primary", htmlType: "submit", value: "Submit" }],
  },
];
