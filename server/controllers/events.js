import pool from '../config/database.js'

export const getEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY event_date ASC')
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getEventsByLocation = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY event_date ASC',
      [req.params.locationId]
    )
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}