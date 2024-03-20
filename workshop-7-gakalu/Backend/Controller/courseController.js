const courseCollection = require('../Model/courseModel')
exports.getAll = async (req, res) => {
    const courses = await courseCollection.getAll();
    res.send(courses);
}

exports.create = async (req, res) => {
    const{title,faculty,code}=req.body;
    const courses = await courseCollection.create(title,faculty,code);
    res.send({success:1,data:{msg:"added successfully"}})
}

exports.updateCourseById = async (req, res) => {
    const courses = await courseCollection.update(req.params.id, req.body);
    res.send(courses)
}

exports.deleteCourseById = async (req, res) => {
    const courses = await courseCollection.delete(req.params.id);
    res.send(courses)
}

exports.getCourseById = async (req, res) => {
    const courses = await courseCollection.getById(req.params.id);
    res.send(courses)
}
