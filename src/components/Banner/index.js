import React from 'react';
import './Banner.css';
import { FaPhoneAlt, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

function Banner() {
  return (
    <div className="main-text">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      {/* Fontes */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      <img src="https://avatars.githubusercontent.com/u/143028453?v=4" alt="Profile" className="profile-image" />

      <h1>João Pedro Santos Batista</h1>
      <h2>Computer Engineer - Full Stack Developer</h2>

      <div className="social-icons">
        <a href="tel:+5515981422444" target="_blank" rel="noreferrer" aria-label="Phone">
          <FaPhoneAlt className="icon" /> <h3>Contato</h3>
        </a>
        <a href="https://www.linkedin.com/in/joaopsbatista/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="icon" /> <h3>LinkedIn</h3>
        </a>
        <a href="https://github.com/jpsbat" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub className="icon" /> <h3>GitHub</h3>
        </a>
        <a href="mailto:joaopedrobatista.dev@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope className="icon" /> <h3>E-mail</h3>
        </a>
      </div>

      <a href="/curriculo.pdf" download className="download-button">
        <FaDownload className="icon" /> Baixar Currículo em PDF
      </a>
    </div>
  );
}

export default Banner;
