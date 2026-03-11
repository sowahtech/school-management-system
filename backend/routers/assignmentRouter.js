import express from 'express'
import { createAssignment, getAllAssignments } from '../controllers/assignmentController.js'

const router = express.Router()

router.get('/getall', getAllAssignments)
router.post('/create', createAssignment)

export default router