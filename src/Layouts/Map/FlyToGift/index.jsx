import L from "leaflet";

const flyToPosition = async ({ latitude, longitude, icon, mapRe, zoom }) => {
  console.log(mapRe)
  let marker = null;
  await new Promise((resolve) => {
    mapRe.current.flyTo([latitude, longitude], zoom, {
      duration: 2,
    });
    mapRe.current.once("moveend", () => {
      resolve();
    });
  });

  marker = await new Promise((resolve) => {
    const markerObj = new L.marker([latitude, longitude], {
      icon: L.icon({
        iconUrl: icon,
        iconSize: [60],
      }),
    });
    markerObj.addTo(mapRe.current);
    resolve(markerObj);
  });

  mapRe.current.on("move", () => {
    if (marker) {
      mapRe.current.removeLayer(marker);
      marker = null;
    }
  });

  return !!marker;
};

export default flyToPosition;
