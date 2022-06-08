import React from 'react';
import ReactDOM from 'react-dom/client';
import Pwd from './Input/demos/pwd';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Pwd></Pwd>
  </React.StrictMode>
);
