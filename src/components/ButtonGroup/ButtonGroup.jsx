import styles from './ButtonGroup.module.css';

function ButtonGroup({ handleButtonClick, handleReset}) {
    return (
        <div className={styles.buttons}>
            <button className={styles.button} onClick={() => handleButtonClick(1)}>Add 1</button>
            <button className={styles.button} onClick={() => handleButtonClick(2)}>Add 2</button>
            <button className={styles.button} onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default ButtonGroup;