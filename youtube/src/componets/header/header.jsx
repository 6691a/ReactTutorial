import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.ui_logo1} src="/images/youtube11.png"/>
                <img className={styles.main_logo} src="/images/logo2.png" alt="youtube logo"/>
            </div>
            
            <div className={styles.input}>
            <input type="search" placeholder="검색"/>
                <button className = {styles.button} type="submit">
                    <img className={styles.search_logo} src="/images/loupe.png" alt="search"/>
                </button>
            </div>
           
            <div className={styles.tools}>
                <img className={styles.ui_logo1} src="/images/youtube8.png" alt="make"/>
                <img className={styles.ui_logo} src="/images/youtube9.png" alt="app"/>
                <img className={styles.ui_logo} src="/images/youtube10.png" alt="call"/>
            </div>
            

           
        </header>
    )
};
export default Header;