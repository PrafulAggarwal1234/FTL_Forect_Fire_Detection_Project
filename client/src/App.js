import React from 'react';
import './index.css';
import Map from './components/Map';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    const fetchCoordinates = async () => {
      console.log('ehre');
      console.log('fjkf')
      try {
        console.log('try')
        const response = await axios.get('http://localhost:8080/api/cordinate');
        console.log(response.data)
        setCoordinates(response.data);
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <div className="App">
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLXWb4GytHGhQ3DiFZd6OqDo1nqPy0ROklT80DpyItg&s" style={{maxHeight: '80px'}} alt="IIT Kharagpur Fire Department" className="logo" />
        <nav>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </nav>
      </header>
      <main>
        {/* <div className="main-content"> */}
          <div className="sidebar">
            <h2>Fire Safety Tips</h2>
            <ul>
              <li>Have a fire escape plan and practice it regularly.</li>
              <li>Install and maintain smoke detectors in your home.</li>
              <li>Know the location of fire extinguishers and how to use them.</li>
              <li>Never leave cooking unattended.</li>
              <li>Keep flammable materials away from heat sources.</li>
            </ul>
          </div>
          <div className="content">
            <h1 style={{marginLeft: '50px'}}>IIT Kharagpur Fire Department - Live Fire Locations</h1>
            <div className="map-container">
              <Map coordinates={coordinates} />
            </div>
          </div>
        {/* </div> */}
      </main>
      <footer>
        &copy; 2024 IIT Kharagpur Fire Department
      </footer>
    </div>
  );
}

export default App;
