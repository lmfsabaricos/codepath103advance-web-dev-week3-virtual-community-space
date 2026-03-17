import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../services/LocationsAPI";
import unitygrid from "../assets/unitygrid.jpg";
import "../css/Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const locationsData = await getLocations();
      setLocations(locationsData || []);
    };

    fetchData();
  }, []);

  return (
    <div className="locations-page">
      <img src={unitygrid} alt="UnityGrid Plaza" className="locations-background" />

      <div className="hero-overlay"></div>

      <div className="locations-content">
        <div className="hero-left">
          <h1 className="main-title">UNITYGRID PLAZA</h1>
          <p className="hero-subtitle">
            Explore the city’s most exciting futuristic spaces and discover
            what’s happening in each district.
          </p>
        </div>

        <div className="top-buttons">
          <Link to="/">
            <button className="nav-button active-nav">HOME</button>
          </Link>
          <Link to="/events">
            <button className="nav-button">EVENTS</button>
          </Link>
        </div>

        <div className="location-grid">
          {locations.map((location) => (
            <Link
              key={location.id}
              to={`/locations/${location.id}`}
              className="location-link"
            >
              <div className="location-card">
                <img
                  src={location.image}
                  alt={location.name}
                  className="location-card-image"
                />
                <div className="location-card-body">
                  <h2>{location.name}</h2>
                  <p>{location.description}</p>
                  <span className="location-card-cta">View Events →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;