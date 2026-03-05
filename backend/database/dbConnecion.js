import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName : "School_Management_System"
    }).then(
        console.log("connected to database successfully")
    ).catch((error) =>{
        console.log("Error connecting to the database")
        console.log(error)
    })
}