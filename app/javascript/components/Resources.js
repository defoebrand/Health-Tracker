import React from 'react';
import Button from 'react-bootstrap/Button';
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
                    <Card.Title>Eats Shoots Leaves</Card.Title>
                    <Card.Text>
                      A wonderfully robust recipe catalog focused around vegan recipes.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="https://www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Nutrition Information</Card.Title>
                    <Card.Text>
                      Search for nearly any food and get complete nutritional information
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Food Allergies</Card.Title>
                    <Card.Text>
                      Check this database for whether or not a food product
                      is likely to have any allergenic components or not.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
            <Card.Body>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Eats Shoots Leaves</Card.Title>
                    <Card.Text>
                      A wonderfully robust recipe catalog focused around vegan recipes.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="https://www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Nutrition Information</Card.Title>
                    <Card.Text>
                      Search for nearly any food and get complete nutritional information
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Food Allergies</Card.Title>
                    <Card.Text>
                      Check this database for whether or not a food product
                      is likely to have any allergenic components or not.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
            <h3>Procedures</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Eats Shoots Leaves</Card.Title>
                    <Card.Text>
                      A wonderfully robust recipe catalog focused around vegan recipes.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="https://www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Nutrition Information</Card.Title>
                    <Card.Text>
                      Search for nearly any food and get complete nutritional information
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Food Allergies</Card.Title>
                    <Card.Text>
                      Check this database for whether or not a food product
                      is likely to have any allergenic components or not.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
            <h3>Common Diagnoses</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Eats Shoots Leaves</Card.Title>
                    <Card.Text>
                      A wonderfully robust recipe catalog focused around vegan recipes.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="https://www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Nutrition Information</Card.Title>
                    <Card.Text>
                      Search for nearly any food and get complete nutritional information
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Food Allergies</Card.Title>
                    <Card.Text>
                      Check this database for whether or not a food product
                      is likely to have any allergenic components or not.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
            <h3>First-Aid</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Eats Shoots Leaves</Card.Title>
                    <Card.Text>
                      A wonderfully robust recipe catalog focused around vegan recipes.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="https://www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Nutrition Information</Card.Title>
                    <Card.Text>
                      Search for nearly any food and get complete nutritional information
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Food Allergies</Card.Title>
                    <Card.Text>
                      Check this database for whether or not a food product
                      is likely to have any allergenic components or not.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button href="www.google.com" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Resources;
