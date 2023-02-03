import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "../src/App";
import html from "./client/html";
import getJs from "./client/getJs";

const fs = require("fs");
const path = require("path");
const assets = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../webpack-assets.json"), "utf-8")
);
let jsStr = getJs(assets["main"].js);
const sheet = new ServerStyleSheet();
let body = renderToString(
  sheet.collectStyles(
    <StaticRouter>
      <App />
    </StaticRouter>
  )
);
const styles = sheet.getStyleTags();

const express = require("express");
const app = express();
app.use(express.static("dist"));

app.get("*", (req, res) => {
//   res.send("111");
    res.send(html({ styles, body, title: "服务端渲染", js: jsStr }));
});
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
