const express = require('express');
const courseController = require('../Controller/courseController');

const router = express.Router();

router.get('', courseController.getAll)
router.post('/create',courseController.create);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourseById);
router.delete('/:id', courseController.deleteCourseById)

module.exports = router;