const express = require("express");
const router = express.Router();
const CoursesController = require("../Controllers/coursesController");
// get all courses
router.get("/",CoursesController.GetAllCourses)
// get course by id
router.get("/:id",CoursesController.GetCourseByID);
// add new course
router.post("/add",CoursesController.AddNewCourse);
// update course by id
router.put("/update/:id",CoursesController.UpdateCourse);
// delete course by id
router.delete("/delete/:id",CoursesController.DeleteCourse);
module.exports = router;