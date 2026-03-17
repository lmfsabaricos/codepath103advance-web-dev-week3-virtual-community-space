import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import locationsRouter from './routes/locations.js'
import eventsRouter from './routes/events.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', locationsRouter)
app.use('/api', eventsRouter)

app.get('/', (req, res) => {
  res.send('Virtual Community Space API is running')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})