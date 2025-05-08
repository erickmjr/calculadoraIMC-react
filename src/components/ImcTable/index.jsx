import { useEffect } from 'react';
import styles from './ImcTable.module.scss';

function ImcTable (imc) {
    
    useEffect(() => {
        if(imc <= 18,5) {
            
        }
    }, [imc])

    return (
        <>
            <div className={styles.table}>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        ≤ 18,5 
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        18,5 - 24,9
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        25,0 - 29,9
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        30,0 - 34,9 
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        35,0 - 39,9
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

                <div className={styles.table__item}>
                    <h3 className={styles.table__item__title}>
                        40,0 ≥ 
                    </h3>
                    <p className={styles.table__item__text}>Below ideal weight</p>
                </div>

            </div>
        </>
    )

}

export default ImcTable;