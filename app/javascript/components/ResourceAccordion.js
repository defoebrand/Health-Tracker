import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import ResourceCard from './ResourceCard';

const ResourceAccordion = ({ resource }) => (
  <Accordion>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h3>{resource.Heading}</h3>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <CardDeck>
            {resource.Info.map(data => (
              <ResourceCard
                key={data.title}
                image={data.image}
                title={data.title}
                text={data.text}
                link={data.link}
              />
            ))}
          </CardDeck>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

ResourceAccordion.propTypes = {
  resource: PropTypes.shape({
    Heading: PropTypes.string,
    Info: PropTypes.arrayOf({
      image: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    }),
  }),
};

ResourceAccordion.defaultProps = {
  resource: {
    Heading: '',
    Info: [{
      image: '',
      title: '',
      text: '',
      link: '',
    }],
  },
};
export default ResourceAccordion;
