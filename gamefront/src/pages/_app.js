import Layout from '../components/layout/layout';
import '../styles/globals.css';
import '../styles/flipCard.css'; // Estilos CSS para la tarjeta

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
