import React from 'react';

const Home = ({ startApp }) => {
  return (
    <div className="home-container">
      <h1>🏛️ Sistema de Proyectos Tecnológicos</h1>
      <p className="subtitle">Gestión y consulta de innovación académica</p>
      
      <div className="info-cards">
        <div className="info-card">
          <h3>Propósito</h3>
          <p>Centralizar y difundir la producción tecnológica de estudiantes e investigadores.</p>
        </div>
        <div className="info-card">
          <h3>Tecnologías</h3>
          <p>React, Firebase Hosting e Inteligencia Artificial.</p>
        </div>
      </div>

      <button className="btn-primary" onClick={startApp}>
        Ver Catálogo de Proyectos
      </button>
    </div>
  );
};

export default Home;