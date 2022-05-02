import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { YScroll } from "./components/yScroll";
import { CustomRouter } from "./components/customRouter";

ReactDOM.render(
  <React.StrictMode>
    <CustomRouter>
      <YScroll>
        <App />
      </YScroll>
    </CustomRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
