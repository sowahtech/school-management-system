import express from "express"
import {config} from "dotenv"
import cors from "cors"
import studentRouter from "./routers/studentRouter.js"
import { dbConnection } from "./database/dbConnecion.js"

const app = express()
config({path: './config/config.env'})
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/vt/students', studentRouter)

dbConnection()

export default app;