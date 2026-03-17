import express from 'express'
import { getEvents, getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

router.get('/events', getEvents)
router.get('/events/location/:locationId', getEventsByLocation)

export default router