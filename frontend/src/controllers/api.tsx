import axios from "axios";

const api = {
  get: (path: string, callback: Function, errorCallback: Function) => {
    axios
      .get(`http://localhost:3010/${path}`)
      .then((response) => callback(response))
      .catch((error) => {
        errorCallback(error);
      });
  },

  post: (path: string, data: object, callback: Function) => {
    axios
      .post(`http://localhost:3010/${path}`, data)
      .then((response) => callback(response));
  },
};

export default api;
