import React from 'react';
import styles from './video_item.module.css'; 

// const Video_item = (props) => (
const Video_item = ({video:{snippet}}) => (
        
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}
                alt="video thumbnail"
                />
                <div className={styles.comment}>
                    <p className={styles.title} >{snippet.title}</p>
                    <p className={styles.channel} >{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );

export default Video_item;