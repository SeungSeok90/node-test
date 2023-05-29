"use strict";

const express = require("express");
const app = express();

const home = require("./src/router/home");

// 앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들 웨어 등록
app.use("/", home);

module.exports = app;