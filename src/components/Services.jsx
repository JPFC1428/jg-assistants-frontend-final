import React from 'react';
import { FaRobot, FaBrain, FaCogs } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nuestras Soluciones</h2>
          <p className="text-muted">Descubre todo lo que nuestros asistentes pueden hacer por ti</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-gradient p-3 rounded-circle d-inline-block mb-3">
                  <FaRobot className="text-white fa-2x" />
                </div>
                <h4>Asistentes 24/7</h4>
                <p className="text-muted">Disponibilidad constante para atender tus necesidades en cualquier momento.</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Saber más</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center p-4">
                <div className="bg-success bg-gradient p-3 rounded-circle d-inline-block mb-3">
                  <FaBrain className="text-white fa-2x" />
                </div>
                <h4>Inteligencia Artificial</h4>
                <p className="text-muted">Tecnología de vanguardia que aprende y se adapta a tus requerimientos.</p>
                <a href="#" className="btn btn-sm btn-outline-success">Saber más</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center p-4">
                <div className="bg-warning bg-gradient p-3 rounded-circle d-inline-block mb-3">
                  <FaCogs className="text-white fa-2x" />
                </div>
                <h4>Integraciones</h4>
                <p className="text-muted">Conecta con tus herramientas favoritas para un flujo de trabajo optimizado.</p>
                <a href="#" className="btn btn-sm btn-outline-warning">Saber más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
