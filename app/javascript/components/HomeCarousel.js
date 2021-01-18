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
          <h2>Bringing Medicine to You</h2>
          <p>Update and view your vital statistics over time.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item className="secondSlide">
      <div className="imageContainer">
        <img className="d-block w-100" src={TeleDoc} alt="Second slide" />
        <Carousel.Caption>
          <h2>In-Home Consultation</h2>
          <p>You can discuss your health in the comfort of your own home.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item className="thirdSlide">
      <div className="imageContainer">
        <img className="d-block w-100" src={GroupHands} alt="Third slide" />
        <Carousel.Caption>
          <h2>Join Your Community</h2>
          <p>Connect with other members to share experiences and offer support.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
