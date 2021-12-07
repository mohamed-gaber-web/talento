import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import axios from "axios";

import { BrowserRouter } from "react-router-dom";

// token access
axios.interceptors.request.use((req) => {
  // const token = localStorage.getItem("access_token");
  const token = `eyJhbGciOiJTSEEyNTYiLCJpc3MiOiJ0YWxlbnRvIn0.eyJVc2VySWQiOiIxIiwiUm9sZSI6IlRhbGVudG9BZG1pbiJ9.      c5b46d8d3e4907fa
  1f942e0755be63e463e9bf4c0b6d7a12d8c4eaea94d53f3b`;
  if (token) {
    req.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
    // req.headers["x-access-token"] = token; // for Node.js Express back-end
  }
  return req;
});

// url api default
axios.defaults.baseURL = "http://20.52.149.172:8080/";

axios
  .get("api/Club")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
