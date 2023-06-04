import React from 'react';
import {  } from 'react-router-dom';
import './Home.css'; // Import the CSS file


const HomePage = () => {
  

  const redirectToStudent = () => {
    window.location.href = '/login';
  };

  const redirectToOfficer = () => {
    window.location.href = '/admin';
  };

  return (
    <div className="home-page">
      <h1><b><l>Welcome to the Home Page</l></b></h1>
      <h6><b>Who are you?</b></h6>
    
      <div className="button-container">
        <button className="btn" onClick={redirectToStudent}>Student</button>
        <button className="btn1" onClick={redirectToOfficer}>Officer</button>
      </div>
    </div>
  );
};

export default HomePage;
