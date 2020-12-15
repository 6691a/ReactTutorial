import React,{ useCallback ,useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './componets/header/header';
import Menu from './componets/menu/menu';
import Video_list from './componets/video_list/video_list';
import Video_detail from './componets/video_detail/video_detail';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo =(video) =>{
    setSelectedVideo(video);
  }

  const search = useCallback( (query) => {
    youtube.search(query)
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  },[youtube])

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));

  }, [youtube]);

  return (
  <div>
    <Header onSearch={search}/>
    <div className={styles.app}>
      
      <section className={styles.content}>
      <div className={styles.menu}>
      <Menu/>
      </div>
      {selectedVideo &&<div className={styles.detail}>
          <Video_detail video={selectedVideo}/>
        </div>
      }
        <div className={selectedVideo ? styles.detail_list : styles.list}>
        <Video_list videos={videos} onVideoClick={selectVideo}/>
        </div>
        
      </section>
      
    </div>
  </div>
  );
}

export default App;
