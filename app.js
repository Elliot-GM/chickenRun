require("dotenv").config();
const { connection } = require("./src/services/connection");
const userRoutes = require("./src/routes/chicken");
const express = require("express");
const port = process.env.PORT || 3000;

connection().catch(error => console.log(error));
express().use(express.json());
express().use(userRoutes);

express().listen(port, () => {
    console.log("Welcome to the chicken run !");
})