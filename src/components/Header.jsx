// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <section className="hero-section text-center text-white py-5" style={{ 
      background: 'linear-gradient(135deg, #4e73df 0%, #224abe 100%)',
      borderRadius: '0 0 20px 20px'
    }}>
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">Bienvenido a JG Assistants</h1>
        <p className="lead mb-5">Tu plataforma de asistentes virtuales inteligentes</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="btn btn-light btn-lg px-4">Comenzar ahora</a>
          <a href="#" className="btn btn-outline-light btn-lg px-4">Ver demo</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
