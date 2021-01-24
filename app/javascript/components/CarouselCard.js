import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

const CarouselCard = ({ image, headline, text }) => (
  <div className="imageContainer">
    <img className="d-block w-100" src={image} alt="First slide" />
    <Carousel.Caption>
      <h2>{headline}</h2>
      <p>{text}</p>
    </Carousel.Caption>
  </div>
);

CarouselCard.propTypes = {
  image: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
};

CarouselCard.defaultProps = {
  image: '',
  headline: '',
  text: '',
};

export default CarouselCard;
