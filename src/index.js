import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { AuthProvider } from './context/auth.context';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

