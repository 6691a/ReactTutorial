import React,{ useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './componets/header/header';
import Menu from './componets/menu/menu';

import Video_list from './componets/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyAdKiYBVAtwzpuVYaDwwpcq71x2Z4urqv0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);
  return (
  <div>
    <Header/>
    <div className={styles.app}>
      <Menu className={styles.menu}/>
      <Video_list videos={videos} />
    </div>
  </div>
  );
  
  
  
}

export default App;
