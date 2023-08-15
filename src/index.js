import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="w-100 h-screen bg-gray-950 flex justify-center items-center">
      <img className="rounded-full w-36 h-36" src="https://github.com/J-Vinicius.png" alt="Extra large avatar" />
      <h1 className="text-gray-100 text-3xl ml-4">Jorge Vinicius</h1>
    </div>
  </React.StrictMode>
);
