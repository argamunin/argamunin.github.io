import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.icon}> imagen</div>
      <div className={styles.containerTabs}>
        <button className={styles.buttonTab}>Inicio</button>
        <button className={styles.buttonTab}>Juegos</button>
        <button className={styles.buttonTab}>Equipo</button>
      </div>
    </div>
  );
}
