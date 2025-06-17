import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Importamos Bootstrap y FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// También tu index.css si tienes estilos propios (opcional)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
