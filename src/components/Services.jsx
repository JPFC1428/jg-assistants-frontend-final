import React from 'react';

function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Nuestros Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Asistentes 24/7</h4>
            <p>Siempre disponibles para tus clientes, en cualquier momento.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Inteligencia Artificial</h4>
            <p>Adaptación inteligente a cada necesidad de tu negocio.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Integraciones</h4>
            <p>Fácil conexión con tus plataformas y herramientas actuales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
