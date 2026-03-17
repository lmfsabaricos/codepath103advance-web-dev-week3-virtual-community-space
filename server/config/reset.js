import 'dotenv/config'
import pool from './database.js'

const createTables = async () => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
      );

      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        event_date TIMESTAMP NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        location_id INTEGER REFERENCES locations(id)
      );
    `)

    await pool.query(`
      INSERT INTO locations (name, description, image)
      VALUES
      ('Sky Dome', 'A futuristic rooftop venue for concerts and light shows.', '/images/skydome.jpg'),
      ('Neon Market', 'A vibrant district filled with vendors, food, and performances.', '/images/neonmarket.jpg'),
      ('Innovation Hub', 'A tech-centered plaza for meetups, demos, and startup events.', '/images/innovationhub.jpg'),
      ('Pulse Arena', 'A high-energy event space for tournaments and digital competitions.', '/images/pulsearena.jpg');
    `)

    await pool.query(`
      INSERT INTO events (title, event_date, description, image, location_id)
      VALUES
      ('Drone Racing Finals', '2026-04-15 18:00:00', 'Watch elite pilots compete in a high-speed drone race.', '/images/drone-racing.jpg', 4),
      ('Cyber Jazz Night', '2026-04-18 20:00:00', 'A live futuristic jazz performance under glowing lights.', '/images/cyber-jazz.jpg', 1),
      ('AI Creator Expo', '2026-04-20 13:00:00', 'Explore AI projects, demos, and community exhibits.', '/images/ai-expo.jpg', 3),
      ('Night Market Festival', '2026-04-22 17:00:00', 'Enjoy food stalls, music, and local vendors.', '/images/night-market.jpg', 2),
      ('Startup Mixer', '2026-04-25 15:00:00', 'Meet founders, developers, and innovators.', '/images/startup-mixer.jpg', 3),
      ('VR Dance Battle', '2026-04-28 19:30:00', 'An immersive dance competition in virtual reality.', '/images/vr-dance.jpg', 4);
    `)

    console.log('Database reset and seeded successfully.')
    process.exit(0)
  } catch (error) {
    console.error('Error resetting database:', error)
    process.exit(1)
  }
}

createTables()