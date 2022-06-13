import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button/demos/basic';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button></Button>
  </React.StrictMode>
);
