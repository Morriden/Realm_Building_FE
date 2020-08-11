import React from 'react';
import { useSelector } from 'react-redux';
import { getTowns } from '../../selectors/townsSelectors';
import { Link } from 'react-router-dom';

const Towns = () => {
  const towns = useSelector(getTowns);

  const townElements = towns.map(town => (
    <Link to={`/town/${town._id}`} key={town._id} >
      <li key={town._id}>
        {town.name}
        <br></br>
        {town.location}
        <br></br>
      </li>
    </Link>
  ));

  return (
    <ul>
      {townElements}
    </ul>
  );
};

export default Towns;
