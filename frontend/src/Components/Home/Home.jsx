// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDJHPOX80IiEbAcfNnvToHdHQqbpeqMHI3A&s" 
        alt="Header"
        className="header-image"
      />
      <div className="search-filters">
        <input type="text" placeholder="Search..." id='searchbar' />
        <div>Filter by:</div>
        <div id='sameid'>Date of Availability</div>
        <div id='sameid'>Location</div> 
        <div id='sameid'>Pricing</div>  
      </div>
    </div>
  );
};

export default Home;
