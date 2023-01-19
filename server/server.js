require('dotenv').config();
const express = require("express");
const router = require("./routes/routes");
const port = process.env.PORT;

const app = express();
const cookieParser = require('cookie-parser');

// Middlewares: 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Uso de rutas
app.use("/", router);
app.listen(port, () => console.log(`Server ON: ${port}`));