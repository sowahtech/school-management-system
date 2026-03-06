import express from 'express'
import { createBook, getAllBooks } from '../controllers/libraryController.js'

const router = express.Router()

router.get('/getall', getAllBooks)
router.post('/create', createBook)

export default router