const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/ITI";
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL, {useNewUrlParser:true});
var coursesSchema = {
    courseName:{type:String,pattern:"^[a-zA-Z]+$", required:true},
    courseDuration:{ type:Number, max:30 },
}
var Courses = mongoose.model("Courses",coursesSchema);

class CourseModel{
    constructor(courseName ,courseDuration){
        this.courseName = courseName;
        this.courseDuration = courseDuration;
    }
    static async GetAllCourses(){
        return await Courses.find({});
    }
    static async GetCourseByID(id){
        return await Courses.findById(id);;
    }
    async AddCourse(){
        var newCourse = new Courses({ courseName: this.courseName, courseDuration: this.courseDuration  });
        return await newCourse.save();
    }
    async UpdateCourse(id){
        return await Courses.updateOne({_id:id}, {courseName:this.courseName, courseDuration:this.courseDuration});
    }
    static async DeleteCourse(id){
        return await Courses.deleteOne({ _id:id});
    }
}
module.exports = CourseModel;
