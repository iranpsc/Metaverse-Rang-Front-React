export const calculatePolygonCentroid = (vertices = []) => {
  if (!vertices.length) return { x: 0, y: 0 };

  let sumX = 0;
  let sumY = 0;

  for (let i = 0; i < vertices.length; i++) {
    sumX += parseFloat(vertices[i].x);
    sumY += parseFloat(vertices[i].y);
  }

  return {
    x: sumX / vertices.length,
    y: sumY / vertices.length,
  };
};
