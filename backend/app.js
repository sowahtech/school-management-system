import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import studentRouter from "./routers/studentRouter.js"
import eventsRouter from "./routers/eventsRouter.js"
import libraryRouter from "./routers/libraryRouter.js"
import announcementRouter from "./routers/announcementRouter.js"
import assignmentRouter from "./routers/assignmentRouter.js"
import { dbConnection } from "./database/dbConnecion.js"

const app = express()
// config({path: './config/config.env'})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
dotenv.config();


app.use('/api/vt/students', studentRouter)
app.use('/api/vt/events', eventsRouter)
app.use('/api/vt/library', libraryRouter)
app.use('/api/vt/announcement', announcementRouter)
app.use('/api/vt/assignment', assignmentRouter)

dbConnection()

export default app;