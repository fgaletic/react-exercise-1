import styles from './Image.module.css';

function Image({ src, alt, className }) {
    return (
        <img className={`${styles.image} ${styles[className]}`} src={src} alt={alt}  />
    )
}

export default Image;