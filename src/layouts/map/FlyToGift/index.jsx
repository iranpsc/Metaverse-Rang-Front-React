// Import the Leaflet library under the name L
import L from "leaflet";

// Define an async function called flyToPosition that takes in an object with latitude, longitude, icon, map reference, and zoom level as properties
const flyToPosition = async ({ latitude, longitude, icon, mapRe, zoom }) => {
  // Initialize a variable to store the marker object
  let marker = null;

  // Wait for the map to fly to the specified position by creating a promise that resolves when the "moveend" event occurs
  await new Promise((resolve) => {
    mapRe.current.flyTo([latitude, longitude], zoom, {
      duration: 2,
    });
    mapRe.current.once("moveend", () => {
      resolve();
    });
  });

  // Add a marker to the new position by creating another promise that resolves with the marker object once it is added to the map
  marker = await new Promise((resolve) => {
    const markerObj = new L.marker([latitude, longitude], {
      icon: L.icon({
        iconUrl:icon,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
      }),
    });
    markerObj.addTo(mapRe.current);
    resolve(markerObj);  // Resolving the promise with the marker object
  });

  // When the map is moved, remove the marker if it exists
  mapRe.current.on("move", () => {
    if (marker) {
      mapRe.current.removeLayer(marker);
      marker = null;
    }
  });

  // Return a boolean value indicating whether the marker object is truthy or falsy
  return !!marker;
};

// Export the function as the default export
export default flyToPosition;
