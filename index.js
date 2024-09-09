import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Components/Context/ShopContextProvider'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider> {/* Ensure the provider is correctly implemented */}
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
