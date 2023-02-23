const Ajv = require("ajv");
var ajv = new Ajv();
const CoursesSchema = {
    type:"object",
    properties:{
        courseName:{type:"string",pattern:"^[a-zA-Z]+$"},
        courseDuration:{type:"integer",maximum:30}
    },
    required:["courseName", "courseDuration"],
    additionalProperties:false
}
const validate = ajv.compile(CoursesSchema);

module.exports = validate;

