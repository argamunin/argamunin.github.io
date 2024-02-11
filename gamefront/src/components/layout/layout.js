import Footer from "./footer/footer";
import Header from "./header/header";
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>
        {children}
      </div>
      <Footer/>
    </div>
  );
}
