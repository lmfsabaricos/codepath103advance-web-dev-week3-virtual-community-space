import { useEffect, useState } from "react";
import { getLocations } from "../services/LocationsAPI";

function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocations();
      setLocations(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {locations.map((location) => (
        <div key={location.id}>
          <h2>{location.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;