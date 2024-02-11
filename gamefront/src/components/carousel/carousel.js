/* eslint-disable react/jsx-key */

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem from './carouselItem/carouselItem';

const CarouselComponent = ({ images }) => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <Carousel>
        {images ? (
          images.map((image) => {
            return (
              <div>
                <CarouselItem imageSrc={image} />
              </div>
            );
          })
        ) : (
          <div />
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
