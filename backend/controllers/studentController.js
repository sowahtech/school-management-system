import { Student } from "../models/studentSchema";

export const createStudent = async(req, res, next) =>{
    const {name, registrationNumber, grade} = req.body

    try {
        if(!name || !registrationNumber || !grade){
            return next("Please fill out the full form", 400)
        }
        await Student.create({name, registrationNumber, grade})
        res.status(200).json({
            success: true,
            message: "Student created"
        })
    } catch (err) {
       next(err) 
    }
}

export const getAllStudents = async(req, res, next) =>{
    try {
        const students = await Student.find()
    } catch (error) {
        
    }
}