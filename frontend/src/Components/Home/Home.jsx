// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import makeRequest from '../../Helpers/makeRequest';
import Card from './Card/Card';

const Home = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest("get", '/api/allAds');
        setData(response.data);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div style={{padding: "0 14%"}} className="home-container">
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
      <div style={{display:"flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start"}}>
        {data.map((item) => (
          <Card data={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
