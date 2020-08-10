import React from 'react';
import PropTypes from 'prop-types';

const Town = ({ name, food, law, population, production, traffic, location }) => (
  <section>
    <p>{name}</p>
    <p>{food}</p>
    <p>{law}</p>
    <p>{population}</p>
    <p>{production}</p>
    <p>{traffic}</p>
    <p>{location}</p>
  </section>
);

Town.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  law: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  production: PropTypes.number.isRequired,
  traffic: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired
};

export default Town;
