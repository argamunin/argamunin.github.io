import CarouselComponent from '../components/carousel/carousel';
import FlipCard from '../components/flipCard/flipCard';
import styles from '../styles/home.module.scss';
import '@fortawesome/fontawesome-free/css/all.css';

const gamesAvailables = [
  {
    id: 1,
    name: 'Crazy Space Ship',
    images: [
      '/img1.PNG',
      '/img2.PNG',
      '/img3.PNG',
      '/img4.PNG',
      '/img5.PNG',
      '/img6.PNG',
    ],
    description: 'Emergencia....',
  },
];
export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.h1}> ARGAMUNIN </p>
        <div className={styles.linea} />
        <div className={styles.sectionGame}>
          <div className={styles.containerCarousel}>
            <CarouselComponent images={gamesAvailables[0].images} />
          </div>
          <div className={styles.containerDescription}>
            <p className={styles.text}>
              ¡Emergencia espacial! La nave de capitán Toki y su intrépida
              tripulación ha sufrido un desperfecto catastrófico, dejándolos sin
              control.
              <br />
              <br /> Con el destino colgando de un hilo, su única esperanza es
              aprovechar la gravedad de los planetas cercanos para maniobrar y
              regresar a salvo a casa.
              <br />
              <br /> ¡Prepárate para una aventura épica mientras desafiamos las
              leyes del cosmos y luchamos contra el tiempo en esta emocionante
              odisea espacial!
            </p>
            <div className={styles.sectionButton}>
              <p className={styles.formalText}>
                Disponible en: <i className="fab fa-google-play"></i>
              </p>
              <button className={styles.buttonTab}>Jugar</button>
            </div>
          </div>
        </div>
        <p className={styles.subtitulos}> Nuestros proyectos </p>
        <div className={styles.linea} />
        <div className={styles.sectionProject}>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent="/img7.png"
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent="/img7.png"
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent="/img7.png"
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent="/img7.png"
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
        </div>

        <p className={styles.subtitulos}> Equipo </p>
        <div className={styles.linea} />
        <div className={styles.team}>algo</div>
      </div>
    </div>
  );
}
