import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from '../components/CarouselCard';
import Footer from '../components/Footer';

import carousel from '../data/carousel';

const HomePage = () => (
  <main className="HomePage">
    <Carousel className="Carousel">
      {carousel.map(card => (
        <Carousel.Item key={card.headline}>
          <CarouselCard
            image={card.image}
            headline={card.headline}
            text={card.text}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    <Footer />
  </main>
);

export default HomePage;
