require("dotenv").config();
const { main } = require("./src/services/mongoose");
const userRoutes = require("./src/routes/chicken");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

main().catch(error => console.log(error));

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
    console.log("is start");
})