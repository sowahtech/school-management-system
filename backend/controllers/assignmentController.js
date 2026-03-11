import { Assignment } from "../models/assignmentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createAssignment = async(req, res, next) =>{
    console.log(req.body)
    const { title, description, grade, deadline} = req.body

    try {
        if(!title || !description || !grade || !deadline){
            handleValidationError("Please fill out the full form", 400)
        }
        await Assignment.create({ title, description, grade, deadline})
        res.status(200).json({
            success: true,
            message: "Assignment created successfully"
        })
    } catch (err) {
       next(err) 
    }
}

export const getAllAssignments = async(req, res, next) =>{
    try {
        const students = await Assignment.find()
        res.status(200).json({
            success: true,
            students
        })
    } catch (err) {
        next(err)
    }
}