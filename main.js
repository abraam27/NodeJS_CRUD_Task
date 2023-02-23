/**
 * 1-npm i express
 * 2-npm i body-parser
 * 3-npm i path
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7500
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//#region For courses [CRUD] [Creat-Read-Update-Delete]
const coursesRoutes = require("./Routes/CoursesRoutes");
app.use("/api/courses",coursesRoutes);
//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})