import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css'


const Video_list = (props) => (
        <ul className={styles.videos}>
            {props.videos.map(vidio => (
                <Videoitem key={vidio.id} video={vidio}/>
            ))}
        </ul>
    );

export default Video_list;