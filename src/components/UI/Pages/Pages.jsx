import React from 'react';
import styles from './Pages.module.css'

const Pages = ({pages, currentPage, setCurrentPage}) => {
    const nextPage = () => {
        if (currentPage !== pages.length)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }
    return (
        <div className={styles.wrapper}>
            <span onClick={prevPage} className={styles.page}>«</span>
            {pages.map( p =>
                <span
                    className={currentPage === p
                        ? [styles.page, styles.active].join(' ')
                        : styles.page
                    }
                    key={p}
                    onClick={() => setCurrentPage(p)}
                >{p}
                </span>
            )}
            <span onClick={nextPage} className={styles.page}>»</span>
        </div>
    );
};

export default Pages;