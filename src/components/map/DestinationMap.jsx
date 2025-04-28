import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const GMAP_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const mapContainerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 20,
    lng: 0,
};

const DestinationMap = ({destination} ) => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    console.log(destination);
    return (
        <LoadScript googleMapsApiKey={GMAP_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={2}
            >
                    <Marker
                        position={{ lat: destination.lat, lng: destination.lng }}
                        title={destination.name}
                        onClick={() => setSelectedDestination(destination)}
                    />

                {selectedDestination && (
                    <InfoWindow
                        position={{
                            lat: selectedDestination.lat,
                            lng: selectedDestination.lng,
                        }}
                        onCloseClick={() => setSelectedDestination(null)}
                    >
                        <div style={{ maxWidth: '200px' }}>
                            <h3 className="font-bold text-lg">{selectedDestination.name}</h3>
                            <p><strong>Cost:</strong> ${selectedDestination.averageCost}</p>
                            <p><strong>Styles:</strong> {selectedDestination.styles.join(', ')}</p>
                            <p><strong>Tags:</strong> {selectedDestination.tags.join(', ')}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default DestinationMap;
