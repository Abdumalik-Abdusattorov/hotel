const express = require("express");
const dotenv = require("dotenv")
const app = express();
const {connect} = require("mongoose")
const routes = require("./src/routs")
const fileuploda = require("express-fileupload")
const cookieParser = require("cookie-parser");
const cors = require("cors")
dotenv.config()
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileuploda())


app.use("/api",routes)

const start=async()=>{
    await connect("mongodb+srv://abdumalik:12345@cluster0.xuej0xa.mongodb.net/");
    console.log("connect Db");

};
start()
app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})

