import { useEffect } from 'react';
import styles from './Calculadora.module.scss';

function CalculadoraForm({setHeight, setWeight, height, weight, setImc}) {

    useEffect(() => {
        setImc((weight / (height*height)));
    }, [height, setImc, weight])
    
    return (
        <>
            <div className={styles.container}>
                <form className={styles.container__form}>

                    <div className={styles.containerItem}>
                        <label htmlFor="weight">
                            Weight (Kg)
                        </label>
                        <input
                            className={styles.container__form__input}
                            type="number"             placeholder='Type here...'
                            name='weight'
                            onChange={e => setWeight(e.target.value)}
                        />
                    </div>
                    <div className={styles.containerItem}>
                        <label htmlFor="weight">
                            Height (m)
                        </label>
                        <input
                            className={styles.container__form__input}
                            type="number"
                            name='height'
                            placeholder='Type here...'
                            onChange={e => setHeight(e.target.value)}
                        />
                    </div>

                </form>
            </div>
        </>
    ) 
}

export default CalculadoraForm;