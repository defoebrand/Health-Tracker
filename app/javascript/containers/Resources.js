import React from 'react';

import ResourceAccordion from '../components/ResourceAccordion';

import resourceData from '../data/resources';

const Resources = () => (
  <>
    {resourceData.map(resource => (
      <ResourceAccordion key={resource.Heading} resource={resource} />
    ))}

  </>
);

export default Resources;
