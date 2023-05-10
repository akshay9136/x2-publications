import styles from './back-button.module.css';

export default function BackButton() {
    return (
        <div
            className={styles.backButton}
            onClick={() => window.history.back()}
        ></div>
    );
}
