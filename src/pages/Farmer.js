// import React from 'react';
// import tomatoBackground from '../tomato_bg.jpg'

// function Farmer() {
//   return (
//     <div>
//       <h2>Welcome to your dashboard</h2>
      
//     </div>
//   );
// }


// export default Farmer;

import React from 'react';
import tomatoBackground from '../tomato_bg.jpg'

function Farmer() {
  return (
    <div>
      <h2>Welcome to your dashboard</h2>
      <p>Click the buttons below:</p>
      
      <div style={{ marginBottom: '20px' }}>
        <a href="https://mainpy-wek4ajoy7ibgiwmqcdepkl.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <button style={{ background: 'orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginRight: '10px' }}>
            Predict Fertilizer
          </button>
        </a>
        
        <a href="https://pricepredictiontomato.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <button style={{ background: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Predict Tomato Price
          </button>
        </a>
      </div>
    </div>
  );
}

export default Farmer;
