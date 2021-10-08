import {authUser} from '../controllers/userController.js'
import express from 'express'

const router = express.Router()

router.post('/login', authUser)



export default router