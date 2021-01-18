import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GroupHands from '../../assets/images/groupHands.jpg';
import Steth from '../../assets/images/steth.jpg';
import TeleDoc from '../../assets/images/teleDoc.jpg';

const HomeCarousel = () => (
  <Carousel className="Carousel">
    <Carousel.Item className="firstSlide">
      <div className="imageContainer">
        <img className="d-block w-100" src={Steth} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item className="secondSlide">
      <div className="imageContainer">
        <img className="d-block w-100" src={TeleDoc} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item className="thirdSlide">
      <div className="imageContainer">
        <img className="d-block w-100" src={GroupHands} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
