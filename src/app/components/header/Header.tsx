import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>METAR Decoder</h1>
    </div>
  )
}