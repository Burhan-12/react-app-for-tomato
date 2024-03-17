import React from 'react';
import { Link } from 'react-router-dom';
// import tomatoBackground from '../tomato_bg.jpg'

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
        {/* Link to the Contact page */}
     <h1><Link to="/Tradercontacts">Contacts Details </Link></h1>
      </div>
    </div>
  );
}

export default Farmer;
