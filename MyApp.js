import React from 'react';
import Header from './UI/Header';
import reactDom from 'react-dom/client';
import './MyApp.css';
function MyApp() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = reactDom.createRoot(document.getElementById('root'));

root.render(<MyApp />);
