import React from 'react'; // Importing React to use JSX
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Importing necessary components from the @react-google-maps/api package

// Container style for the map
const containerStyle = {
  width: '100%',  // Full width of the parent container
  height: '400px'  // Fixed height for the map
};

// Centering the map on a specific location (latitude and longitude for Dhaka, Bangladesh)
const center = {
  lat: 23.8103,  // Latitude for Dhaka
  lng: 90.4125   // Longitude for Dhaka
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">  {/* Load the Google Maps API script with the provided API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}  // Assigning the map container style
        center={center}  // Setting the initial center of the map
        zoom={15}  // Zoom level for the map
      >
        {/* Adding a marker at the center of the map */}
        <Marker position={center} />  
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent; // Exporting the MapComponent
