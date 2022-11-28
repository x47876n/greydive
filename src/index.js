import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from './layouts/menu';
import Logo from './layouts/logo';
import GenerateRoutes from './routes/generate-routes';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Logo />
    <Menu />
    <GenerateRoutes />
  </React.StrictMode>
);