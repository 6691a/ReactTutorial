import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';



ReactDOM.render(
  // <React.StrictMode> 생략 가능 실수를 잡아주기 위해 존재함
  // 배포시 자동으로 꺼짐
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


