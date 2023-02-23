const validate = require("../Utils/CoursesValidation");
const CourseModel = require("../Models/CoursesModel");
var GetAllCourses = async (req, res)=>{
    res.status(200).json(await CourseModel.GetAllCourses());
};
var GetCourseByID = async (req, res)=>{
    res.status(200).json(await CourseModel.GetCourseByID(req.params.id));
};
var AddNewCourse = (req, res)=>{
    var newCourse = new CourseModel(req.body.courseName, req.body.courseDuration);
    if(validate(newCourse)){
        if(newCourse.AddCourse()){
            res.status(201).send("Add Successfully !");
        }else{
            res.status(400).send("Not Added !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
    }
};
var UpdateCourse = (req, res)=>{
    var updatedCourse = new CourseModel(req.body.courseName, req.body.courseDuration);
    if(validate(updatedCourse)){
        if(updatedCourse.UpdateCourse(req.params.id)){
            res.status(201).send("Updated Successfully !");
        }else{
            res.status(400).send("Not Updated !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
    }
};
var DeleteCourse = async (req, res)=>{
    if(CourseModel.DeleteCourse(req.params.id)){
        res.status(201).send("Deleted Successfully !");
    }else{
        res.status(400).send("Not Deleted !");
    }
};
module.exports = {
    GetAllCourses,
    GetCourseByID,
    AddNewCourse,
    UpdateCourse,
    DeleteCourse
};