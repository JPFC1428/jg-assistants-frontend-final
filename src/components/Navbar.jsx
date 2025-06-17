// src/components/Navbar.jsx

import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
         <img src={logo} alt="JG Assistants logo" style={{ height: "60px" }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Funciones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Precios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            <li className="nav-item"><a className="btn btn-outline-light ms-2" href="#">Iniciar Sesión</a></li>
            <li className="nav-item"><a className="btn btn-primary ms-2" href="#">Registrarse</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
