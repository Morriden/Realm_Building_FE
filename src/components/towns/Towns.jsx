import React from 'react';
import { useSelector } from 'react-redux';
import Town from './Town';

const Towns = () => {
  const towns = useSelector(getTowns);

  const townElements = towns.map(town => (
    <li key={town.id}>
      <Town {...town} />
    </li>
  ));

  return (
    <ul>
      {townElements}
    </ul>
  );
};

export default Towns;
