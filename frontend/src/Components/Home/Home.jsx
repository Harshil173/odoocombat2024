// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="/images/banner.png" 
        alt="Header"
        className="header-image"
      />
      <div className="search-filters">
        <div style={{backgroundColor : '#E9E8FC',display:'flex',alignItems: 'center',borderRadius: '15px',width: '250px'}}>
          <input type="text" placeholder="  Search..." id='searchbar' />
          <img
          src="/images/iconsearch.png" 
          alt="Header"
          className="header-image"
          style={{width: '20px', height: '22px'}}
          />
        </div>
        <div style={{color:'grey'}}>Filter by:</div>
        <div id='sameid'>
          Date of Availability
        </div>
        <div id='diffid' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'7px'}}>
        <img
          src="/images/iconsearch.png" 
          alt="Header"
          className="header-image"
          style={{width: '20px', height: '20px'}}
          />
          Location</div> 
        <div id='sameid'>Pricing</div>  
      </div>
    </div>
  );
};

export default Home;
