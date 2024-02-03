import React from 'react'
import ReactDOM from 'react-dom/client';
import 'animate.css/animate.min.css';
import App from './App';
//or import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
//another version (below)?
//ReactDOM.render(
    //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);