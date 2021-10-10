import axios from "axios";

export default axios.create({
  baseURL: "https://dejavu99.herokuapp.com/api/v1/users",
});
