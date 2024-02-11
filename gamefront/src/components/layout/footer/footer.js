import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.containerTabs}>
        <button className={styles.buttonTab}>Novedades</button>
        <button className={styles.buttonTab}>Trabaja con nosotros</button>
        <button className={styles.buttonTab}>Biblioteca de juegos</button>
        <button className={styles.buttonTab}>Politicas de privacidad</button>
      </div>
    </div>
  );
}
