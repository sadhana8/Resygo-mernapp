import express from 'express'
import { createReservation, getAllReservations, deleteReservation} from '../controllers/reservationController.js'

const router = express.Router()

router.post('/', createReservation)
router.get('/get', getAllReservations)
router.delete('/delete/:id', deleteReservation)

export default router