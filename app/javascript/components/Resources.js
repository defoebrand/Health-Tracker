import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardDeck from 'react-bootstrap/CardDeck';

const Resources = () => {
  const hello = 'hello';
  return (
    <>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Dietary</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                      {' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Prescription</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Need something here</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Procedures</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Need something here</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Common Diagnoses</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Need something here</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>First-Aid</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Need something here</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Resources;
