// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <img src={logo} alt="JG Assistants Logo" className="mb-3" style={{ height: "80px" }} />
            <p>La plataforma líder en asistentes virtuales inteligentes para transformar tu productividad.</p>
            <div className="d-flex gap-2">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Producto</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Funciones</a></li>
              <li><a href="#" className="text-white text-decoration-none">Precios</a></li>
              <li><a href="#" className="text-white text-decoration-none">API</a></li>
              <li><a href="#" className="text-white text-decoration-none">Integraciones</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Compañía</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Sobre nosotros</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Carreras</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacidad</a></li>
              <li><a href="#" className="text-white text-decoration-none">Términos</a></li>
              <li><a href="#" className="text-white text-decoration-none">Seguridad</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-light" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>© 2025 JG Assistants. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p>Hecho con <FaHeart className="text-danger" /> para revolucionar tu productividad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
