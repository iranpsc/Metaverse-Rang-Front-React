export const flyToMapPosition = ({
  mapRef,
  latitude,
  longitude,
  zoom = 17,
  rotate = true,
  marker = true,
}) => {
  if (!mapRef?.default) return;

  const map = mapRef.default.getMap();

  // Remove old marker
  if (map.getSource("location-icon")) {
    map.removeLayer("location-icon-layer");
    map.removeSource("location-icon");
  }

  // Add marker
  if (marker) {
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      (error, image) => {
        if (error) return;

        if (!map.hasImage("custom-marker")) {
          map.addImage("custom-marker", image);
        }

        map.addSource("location-icon", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
          },
        });

        map.addLayer({
          id: "location-icon-layer",
          type: "symbol",
          source: "location-icon",
          layout: {
            "icon-image": "custom-marker",
            "icon-size": 0.65,
            "icon-offset": [0, -15],
          },
        });
      }
    );
  }

  // Fly
  map.flyTo({
    center: [longitude, latitude],
    zoom,
    bearing: 0,
    essential: true,
    speed: 1.2,
    curve: 1.42,
  });

  if (!rotate) return;

  // Rotate after reaching position
  setTimeout(() => {
    let rotation = 0;

    const rotateCamera = () => {
      if (rotation <= 360) {
        rotation += 3;
        map.rotateTo(rotation, { duration: 100 });
        requestAnimationFrame(rotateCamera);
      }
    };

    rotateCamera();
  }, 3000);
};
