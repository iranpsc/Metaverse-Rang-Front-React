import { memo, useEffect, useState } from 'react';
import { Polygon, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router';
import { BORDER_COLORS } from '../../Services/Constants/BorderColors';
import { POLYGON_COLORS } from '../../Services/Constants/PolygonColors';
import useRequest from '../../Services/Hooks/useRequest';

const MapPolygons = memo(() => {
    const [features, setFeatures] = useState([]);
    const [zoom, setZoom] = useState(15);
    
    const { Request } = useRequest();

    const Navigate = useNavigate();

    const MapEvents = useMapEvents({
        zoomend: () => {
            setZoom(MapEvents.getZoom());
        },
        moveend: () => {
            if(zoom >= 16) {
                const bounds = MapEvents.getBounds();
            
                const bottomLeft = bounds.getSouthWest();
                const bottomRight = bounds.getSouthEast();
    
                const TopLeft = bounds.getNorthWest()            
                const TopRight = bounds.getNorthEast()
    
                Request(`features?points[]=${bottomLeft.lng},${bottomLeft.lat}&points[]=${bottomRight.lng},${bottomRight.lat}&points[]=${TopLeft.lng},${TopLeft.lat}&points[]=${TopRight.lng},${TopRight.lat}`).then(response => {

                    const features = [];
                    for (const feature of response?.data?.data) {
                        features.push({
                            id: feature?.geometry?.feature_id,
                            rgb: feature?.properties?.rgb,
                            coordinates: feature?.geometry?.coordinates.map(coordinate => [coordinate.y, coordinate.x])
                        });
                   }

                   setFeatures(features);
                })
            }
        }
    });

    useEffect(() => {
        window.Echo.channel('feature-status')
        .listen('.feature-status-changed', (e) => {
            const data = []
            for (const feature of features) {
                if(parseInt(feature.id) === parseInt(e.data.id)) {
                    feature.rgb = e.data.rgb;
                }
                data.push(feature);
            }

            setFeatures(data);
        });
    }, [features])

    return (
        <>
            { zoom >= 17 && 
                features.map(feature => <Polygon eventHandlers={{ click: () => Navigate(`/metaverse/feature/${feature.id}`) }} key={feature.id} pathOptions={{ color: BORDER_COLORS[feature.rgb], fillColor: POLYGON_COLORS[feature.rgb], fillOpacity: 0.5 }} positions={feature.coordinates} />)
            }
        </>
    )
})

export default MapPolygons;