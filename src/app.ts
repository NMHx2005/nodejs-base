// gọi express
// const express = require("express");
import express from "express";
import 'dotenv/config'


// Khởi tạo app
const app = express();

const PORT = process.env.PORT || 8000;

// Config View engine
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// Tạo ra link url
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Do máy tính có nhiều cổng nên hãy lắng nghe xem ứng dụng hoạt động ở đâu
app.listen(8000, () => {
    console.log(`My app is running on port: ${PORT}`)
});
