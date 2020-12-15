import React, { memo } from 'react';
import styles from './menu.module.css'

const Menu = memo( (props) => (
    <ul className={styles.menu}>
        <li className={styles.home}>
            <img className={styles.ui_img} src="/images/youtube12.png"/>
            <span className={styles.text}>홈</span>
        </li>

        <li className={styles.home}>
            <img className={styles.ui_img} src="/images/youtube12.png"/>
            <span className={styles.text}>홈</span>
        </li>
        <li className={styles.home}>
            <img className={styles.ui_img} src="/images/youtube2.png"/>
            <span className={styles.text}>구독</span>
        </li>
    </ul>
    ));

export default Menu;