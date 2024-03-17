// import React from 'react';

// function Transport() {
//   return (
//     <div>
//       <h2>Welcome to the Transporter's Page</h2>
//       <p>
//         If you're involved in the world of transportation, you've landed on the right page! This space is dedicated to transporters, logistics enthusiasts, and anyone passionate about the movement of goods and people.
//       </p>
//       <p>
//         Explore the latest trends, technologies, and stories from the world of transportation. Whether you're a truck driver, a logistics manager, or simply interested in the industry, there's something here for you.
//       </p>
//       <p>
//         Join us on this journey as we navigate through the exciting realm of transportation. Safe travels!
//       </p>
//     </div>
//   );
// }

// export default Transport;

import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Transport() {
  // Define the center coordinates for the map
  const center = {
    lat: 51.5074, // London coordinates (dummy)
    lng: -0.1278, // London coordinates (dummy)
  };

  // Define the dummy API key
  const apiKey = 'YOUR_DUMMY_API_KEY';

  return (
    <div>
      <h2>Welcome to the Transporter's Page</h2>
      <p>
        If you're involved in the world of transportation, you've landed on the right page! This space is dedicated to transporters, logistics enthusiasts, and anyone passionate about the movement of goods and people.
      </p>
      <p>
        Explore the latest trends, technologies, and stories from the world of transportation. Whether you're a truck driver, a logistics manager, or simply interested in the industry, there's something here for you.
      </p>
      <p>
        Join us on this journey as we navigate through the exciting realm of transportation. Safe travels!
      </p>

      {/* Google Map */}
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }} // Pass the dummy API key
          defaultCenter={center}
          defaultZoom={10}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="Your Location"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Transport;
