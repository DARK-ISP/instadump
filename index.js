const express = require("express");

const routerapp = require("./Router");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.set("views","./view");

app.use("/",routerapp);

const port = 800;

app.listen(port, ()=>{
    console.log(`server is running on: ${port}`)
})

