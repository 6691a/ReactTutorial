import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css'


const Video_list = ({videos, onVideoClick}) => (
        <ul className={styles.videos}>
            {videos.map(vidio => (
                <Videoitem key={vidio.id} video={vidio} onVideoClick={onVideoClick}/>
            ))}
        </ul>
    );

export default Video_list;