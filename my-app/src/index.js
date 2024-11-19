import React from 'react';
import ReactDOM from 'react-dom/client';  // Atualize para 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Obtém o elemento 'root' no HTML
const container = document.getElementById('root');

// Cria a instância de root usando createRoot
const root = ReactDOM.createRoot(container);

// Renderiza o App
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
