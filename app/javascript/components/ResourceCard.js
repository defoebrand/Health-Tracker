import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ResourceCard = ({
  image, title, text, link,
}) => (
  <Card>
    <Card.Img
      variant="top"
      src={image}
      style={{
        height: 300, objectFit: 'contain', padding: 10,
      }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button href={link} style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
    </Card.Footer>
  </Card>
);

ResourceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

ResourceCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  link: '',
};

export default ResourceCard;
