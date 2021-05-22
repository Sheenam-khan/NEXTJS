import axios from "axios";

const baseUrl = "http://localhost:5000/";

export default {
  employeeDetails(url = baseUrl + "employee/") {
    return {
      fetchAll: () => axios.get(url + "get/"),
      create: (newRecord) => axios.post(url + "add/", newRecord),
      update: (id, updatedRecord) =>  axios.put(url + "update/" + id, updatedRecord),
      delete: (id) => axios.delete(url + "delete/" + id),
    };
  },
};

