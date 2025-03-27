// gọi express
// const express = require("express");
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";


// Khởi tạo app
const app = express();

const PORT = process.env.PORT || 8000;

// config routes
webRoutes(app);

// config static file: javascript/css/images
app.use(express.static('public'));

// Config View engine
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// Do máy tính có nhiều cổng nên hãy lắng nghe xem ứng dụng hoạt động ở đâu
app.listen(8000, () => {
    console.log(`My app is running on port: ${PORT}`)
});
