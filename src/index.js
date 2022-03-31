import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './pages/reducer'
import { StateProvider } from './pages/StateProvider';

ReactDOM.render(
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>

  </BrowserRouter>
    
  ,
  document.getElementById('root')
);


