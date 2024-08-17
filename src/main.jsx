import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ToDo from './ToDo.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);

//1. Priority     Local storage