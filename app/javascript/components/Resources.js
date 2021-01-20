import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardDeck from 'react-bootstrap/CardDeck';

const Resources = () => (
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
                <Card.Img
                  variant="top"
                  src="https://raw.githubusercontent.com/Joseph-Burke/Eats-Shoots-Leaves/feature/project_setup/screenshots/screenshot-recipe.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Eats Shoots Leaves</Card.Title>
                  <Card.Text>
                    A wonderfully robust recipe catalog focused around vegan recipes.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://eats-shoots-leaves.herokuapp.com/" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.fda.gov/files/nutritionedresource_education_header_0.jpg"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Nutrition Information</Card.Title>
                  <Card.Text>
                    Search for nearly any food and get complete nutritional information
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.fda.gov/food/food-labeling-nutrition/nutrition-education-resources-materials" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://unlcms.unl.edu/wdn/templates_5.0/includes/global/favicon/android-chrome-192x192.png?v=m223gpjb0w"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Food Allergies</Card.Title>
                  <Card.Text>
                    Check this database for whether or not a food product
                    is likely to have any allergenic components or not.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="http://www.allergenonline.org/databasebrowse.shtml" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
                <Card.Img
                  variant="top"
                  src="https://tpc.googlesyndication.com/simgad/7914881263719625537/downsize_200k_v1?w=100&h=100"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Online Drug Database</Card.Title>
                  <Card.Text>
                    Find precription information by name.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.rxlist.com/drugs/alpha_a.htm" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.fda.gov/files/styles/medium_3/public/Drugs-Img-Drug-Information-Find-Information-Medication-Guide-Pill-Bottle-1600x900.png?itok=eqZS04Sk"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>FDA Drug Information</Card.Title>
                  <Card.Text>
                    Information on FDA-approved drugs released for sale on the market
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.fda.gov/drugs/information-consumers-and-patients-drugs/find-information-about-drug" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.drugs.com/img/logo/drugscom-logo.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Pill Identifier</Card.Title>
                  <Card.Text>
                    Know more. Be sure.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.drugs.com/imprints.php" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
                <Card.Img
                  variant="top"
                  src="https://img.medscapestatic.com/pi/logos/mscp-logo.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Clinical Procedures A - Z</Card.Title>
                  <Card.Text>
                    An A - Z catalog of clinical procedures as compiled by medscape.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://emedicine.medscape.com/clinical_procedures" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.health.harvard.edu/images/logo-harvard_health-full-v2-@2x.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body style={{ height: 'auto' }}>
                  <Card.Title>Medical Terminology</Card.Title>
                  <Card.Text>
                    A medical vocabulary as compiled by Harvard Health
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ height: 'auto' }}>
                  <Button href="https://www.health.harvard.edu/medical-dictionary-of-health-terms/a-through-c#A-terms" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://newchoicehealth.azureedge.net/assets/img/nch-logo.png?ver=1.0.475.0"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Price Comparison</Card.Title>
                  <Card.Text>
                    Compare prices of common medical procedures based on
                    different locations in the U.S. and insurance types
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.newchoicehealth.com/" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
                <Card.Img
                  variant="top"
                  src="https://americanpregnancy.org/wp-content/themes/your-web-guys/images/logo.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>American Pregnancy Association</Card.Title>
                  <Card.Text>
                    Whether you need a listening ear, information about adoption,
                    or resources to help you have the healthiest pregnancy possible,
                    this is the place.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://americanpregnancy.org/" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.diabetes.org/themes/ada/favicons/apple-touch-icon.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>American Diabetes Association</Card.Title>
                  <Card.Text>
                    The path to understanding diabetes starts here.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.diabetes.org/diabetes" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.cancer.gov/profiles/custom/cgov_site/themes/custom/cgov/static/images/design-elements/logos/nci-logo-full.svg"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>National Cancer Institute</Card.Title>
                  <Card.Text>
                    Find resources from information to support
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.cancer.gov/resources-for/patients" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
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
                <Card.Img
                  variant="top"
                  src="https://www.redcross.org/on/demandware.static/Sites-RedCross-Site/-/default/dw49e84e2a/images/header-footer/ARC-header-logo1.png"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>First-Aid</Card.Title>
                  <Card.Text>
                    Understand the basics of how to look out for you and your loved ones.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.stopthebleed.org/-/media/stop-the-bleed/images/products/premiumbk3.ashx"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>Stop the Bleed</Card.Title>
                  <Card.Text>
                    Learn how to stop traumatic bleeding and save a life.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href="https://www.stopthebleed.org/" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.naemt.org/images/default-source/2017-logos/tccc-300x300.png?sfvrsn=e0cace92_2"
                  style={{
                    height: 300, objectFit: 'contain', padding: 10,
                  }}
                />
                <Card.Body style={{ height: '15%' }}>
                  <Card.Title>Tactical Combat Casualty Care</Card.Title>
                  <Card.Text>
                    Knowing how to administer medical care during active shooter situations
                    could mean the difference between life and death
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ height: '10%' }}>
                  <Button href="https://www.naemt.org/education/naemt-tccc" style={{ width: 'max-content' }} variant="primary">Visit Now</Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </>
);

export default Resources;
