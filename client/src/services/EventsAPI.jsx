const API_URL = "http://localhost:3000/api/events";

export const getEvents = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEventsByLocation = async (locationId) => {
  try {
    const response = await fetch(`${API_URL}/location/${locationId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching location events:", error);
    return [];
  }
};