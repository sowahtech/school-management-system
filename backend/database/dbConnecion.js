import mongoose from 'mongoose'

export const dbConnection = async() => {
    await mongoose.connect(process.env.MONGO_URI, { family : 4}, {
        dbName : "SchoolMS"
    }).then(
        console.log("connected to database successfully")
    ).catch((error) =>{
        console.log("Error connecting to the database")
        console.log(error)
    })
}