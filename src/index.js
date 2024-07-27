import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteSetup from './RouteSetup/RouteSetup';
import App from './App';
import SocialMediabutton from './Section/SocialMediabutton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <div className='relative'>
        <NavBar />
        <Router>
          <RouteSetup />
          <App />
        </Router>
        <Footer />
        <SocialMediabutton />
      </div>
   
  </React.StrictMode>
);

reportWebVitals();
