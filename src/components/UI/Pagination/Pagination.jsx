import React from 'react';
import styles from './Pagination.module.css'
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    const pages = usePagination(totalPages)
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

export default Pagination;