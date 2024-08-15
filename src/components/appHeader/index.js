
import React from 'react';

import styles from "./styles.module.scss"

const AppHeader = () => {
    return (
        <div className={styles.appHeader}>
            <h1 className={styles.title}> <span>Marvel</span> information portal</h1>
            <div className={styles.navLink}>
                <a href='/' className={true && styles.linkActive}>Characters</a>
                {' / '}
                <a href='/' className={false && styles.linkActive}>Comics</a>
            </div>
        </div>
    );
};

export default AppHeader;
