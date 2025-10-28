import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName : "SCHOOL_MANAGEMENT_SYSTEM"
    }).then(
        console.log("connected to database successfully")
    ).catch((error) =>{
        console.log("Error connecting to the database")
        console.log(error)
    })
}