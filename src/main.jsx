import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { YScroll } from "./components/yScroll";
import { CustomRouter } from "./components/customRouter";
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <CustomRouter>
        <YScroll>
          <App />
        </YScroll>
      </CustomRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
