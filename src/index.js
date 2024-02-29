import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import NPContextProvider from './Context/NPContext.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NPContextProvider>
        <App />
    </NPContextProvider>
    );