import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './app/App.css';
import App from './app/App';
import {FeedbackProvider} from "./context/FeedbackContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FeedbackProvider>
      <App />
      </FeedbackProvider>
  </React.StrictMode>
);

