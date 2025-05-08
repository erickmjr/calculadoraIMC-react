import styles from './ImcTable.module.scss';

function ImcTable ({imc}) {

    return (
        <>
            <div className={styles.table}>

                <div className={`${imc <= 18.5 ? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        ≤ 18,5 
                    </h3>
                    <p>Below ideal weight</p>
                </div>

                <div className={`${(imc >= 18.5 && imc <= 24.99) ? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        18,5 - 24,9
                    </h3>
                    <p>Ideal weight</p>
                </div>

                <div className={`${(imc >= 25 && imc <= 29.99) ? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        25,0 - 29,9
                    </h3>
                    <p>Below ideal weight</p>
                </div>

                <div className={`${(imc >= 30 && imc <= 34.99)? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        30,0 - 34,9 
                    </h3>
                    <p>Below ideal weight</p>
                </div>

                <div className={`${(imc >= 35 && imc <= 39.99) ? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        35,0 - 39,9
                    </h3>
                    <p>Below ideal weight</p>
                </div>

                <div className={`${imc >= 40 ? styles['table__item-is--active'] : styles['table__item']}`}>
                    <h3>
                        ≥ 40,0  
                    </h3>
                    <p>Below ideal weight</p>
                </div>

            </div>
        </>
    )

}

export default ImcTable;