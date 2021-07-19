import axios from "axios";

const baseURL = "http://142.93.134.108:1111";

export default axios.create({
  baseURL: baseURL,
});
