import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../services/EventsAPI";
import "../css/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData || []);
    };

    fetchData();
  }, []);

  return (
    <div className="all-events-page">
      <div className="all-events-hero">
        <div className="all-events-overlay"></div>

        <div className="all-events-nav">
          <Link to="/">
            <button className="nav-button">HOME</button>
          </Link>
          <Link to="/events">
            <button className="nav-button active-nav">EVENTS</button>
          </Link>
        </div>

        <div className="all-events-hero-content">
          <h1>All Events</h1>
          <p>Browse every featured experience happening across UnityGrid Plaza.</p>
        </div>
      </div>

      <div className="events-section">
        {events.length === 0 ? (
          <p className="empty-text">No events found.</p>
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
                  <h2>{event.title}</h2>
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
    </div>
  );
};

export default Events;