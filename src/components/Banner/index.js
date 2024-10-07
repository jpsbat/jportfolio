import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="main-text">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

      <img src="https://avatars.githubusercontent.com/u/143028453?v=4" alt="Profile" className="profile-image" />

      <h1>João Pedro Santos Batista</h1>
      <h2>Computer Engineer</h2>
    </div>
  );
}

export default Banner;
