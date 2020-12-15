import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeAPI from './service/youtubeAPI';

const youtube = new YoutubeAPI(process.env.REACT_APP_YOUTUBEAPI_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);


