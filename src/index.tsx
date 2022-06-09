import React from 'react';
import ReactDOM from 'react-dom/client';
import SelectIpt from './Input/demos/selectIpt';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SelectIpt></SelectIpt>
  </React.StrictMode>
);
