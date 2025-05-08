import styles from './Resultado.module.scss';


function Resultado ({ imc }) {

    return (
        <>
            <div className={styles.container}>
                <h2>IMC: {imc.toFixed(2)}</h2>
            </div>
        </>
    )
}

export default Resultado;