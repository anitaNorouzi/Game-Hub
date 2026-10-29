import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9d7c2f51ad54af1a54b992389d50eff",
  },
});
