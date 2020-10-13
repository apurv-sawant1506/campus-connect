import axios from "axios";

export const serverBaseURL = `http://localhost:8080`;

export function setTokenHeader(token) {
  if (token) {
    console.log("Putting Token");
    console.log(token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data = null) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
