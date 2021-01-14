import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const HomePage = () => (
  <Carousel className='Carousel'>
    <Carousel.Item className='firstSlide'>
      <img className="d-block w-100" src="https://i.ytimg.com/vi/zPCZWn_iWb0/maxresdefault.jpg" alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='secondSlide'>
      <img className="d-block w-100" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/2560x1600-Funny-Dog-Wallpaper-1.jpg" alt="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='thirdSlide'>
      <img className="d-block w-100" src="http://1.bp.blogspot.com/-IqqMud-N0Vw/T5uy9VQ0btI/AAAAAAAAGpA/eIcudEFYdOY/s1600/1322516430404.jpg" alt="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default HomePage;