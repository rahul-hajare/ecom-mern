import {addOrderItems, getOrderById, updateOrderToPaid} from '../controllers/orderController.js'
import express from 'express'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)

export default router