import React, { memo, useRef } from 'react';
import styles from './header.module.css'

const Header = memo( ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }

    const onKeyPress = (event) => {
        if(event.key ==='Enter') {
            handleSearch();
        }
    }

    const onClick = () => {
        handleSearch();
    }

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.ui_logo1} src="/images/youtube11.png"/>
                <img className={styles.main_logo} src="/images/logo2.png" alt="youtube logo"/>
            </div>
            
            <div className={styles.input}>
                <input ref = {inputRef} type="search" placeholder="검색" onKeyPress={onKeyPress} />
                <button className = {styles.button} type="submit" onClick={onClick}>
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
});
export default Header;