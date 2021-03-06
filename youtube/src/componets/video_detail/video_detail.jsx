import { prettyDOM } from '@testing-library/react';
import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({video, video:{snippet}}) => (
        <section className={styles.detail}>
            <iframe
                className={styles.video}
                type="text/html" 
                width="100%"
                title="youtubeplayer"
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <h2>{video.snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </section>
    );

export default Video_detail;