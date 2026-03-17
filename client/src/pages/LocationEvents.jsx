import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLocationById } from "../services/LocationsAPI";
import { getEventsByLocation } from "../services/EventsAPI";
import "../css/LocationEvents.css";

const LocationEvents = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const locationData = await getLocationById(id);
      const eventsData = await getEventsByLocation(id);

      setLocation(locationData);
      setEvents(eventsData || []);
    };

    fetchData();
  }, [id]);

  return (
    <div className="location-events-page">
      {location && (
        <>
          <div
            className="location-events-hero"
            style={{ backgroundImage: `url(${location.image})` }}
          >
            <div className="location-events-overlay"></div>

            <div className="location-events-nav">
              <Link to="/">
                <button className="nav-button">HOME</button>
              </Link>
              <Link to="/events">
                <button className="nav-button">ALL EVENTS</button>
              </Link>
            </div>

            <div className="location-events-hero-content">
              <h1>{location.name}</h1>
              <p>{location.description}</p>
            </div>
          </div>

          <div className="events-section">
            <h2 className="section-title">Upcoming Events</h2>

            {events.length === 0 ? (
              <p className="empty-text">No events found for this location.</p>
            ) : (
              <div className="events-grid">
                {events.map((event) => (
                  <div key={event.id} className="event-card">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-card-image"
                    />
                    <div className="event-card-body">
                      <h3>{event.title}</h3>
                      <p className="event-date">
                        {new Date(event.event_date).toLocaleString()}
                      </p>
                      <p className="event-description">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LocationEvents;