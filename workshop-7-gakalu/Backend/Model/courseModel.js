const mongoose = require('mongoose');
const CourseSchema = mongoose.Schema({
    
    title:{type: String, required: true},
    faculty:{type: String, required: true},
    code: {type: String, required: true},
    rating:{type: Number, required: true},
})
const CourseModel = mongoose.model('course', CourseSchema)
class courseCollection {
    static async getAll() {
        const course = await CourseModel.find();
        return course;
    }
    static async create(obj) {
        const course = new CourseModel(obj);
        await course.save();
        return course;
    }
    static async getById(id){
        const course = await CourseModel.findOne({_id: id});
        return course;
    }
    static async update(id, obj){
        const course = await CourseModel.updateOne({_id: id}, obj);
        return course;
    }
    static async delete(id){
        const course = await CourseModel.deleteOne({_id: id});
        return course;
    }
}

module.exports = courseCollection;