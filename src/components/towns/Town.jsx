import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTown, updateTown } from '../../actions/townsActions';
import { fetchDeleteTown, fetchUpdateTown } from '../../services/fetchTowns';
import { useParams, useHistory } from 'react-router-dom';
import { getTown } from '../../selectors/townsSelectors';

const Town = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const townData = useSelector(state => getTown(state, id));

  const [name, setName] = useState(townData.name);
  const [food, setFood] = useState(townData.food);
  const [law, setLaw] = useState(townData.law);
  const [population, setPopulation] = useState(townData.population);
  const [production, setProduction] = useState(townData.production);
  const [traffic, setTraffic] = useState(townData.traffic);
  const [location, setLocation] = useState(townData.location);

  const data = {
    name,
    food,
    law,
    population,
    production,
    traffic,
    location,
  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'food') setFood(target.value);
    if(target.name === 'law') setLaw(target.value);
    if(target.name === 'population') setPopulation(target.value);
    if(target.name === 'production') setProduction(target.value);
    if(target.name === 'traffic') setTraffic(target.value);
    if(target.name === 'location') setLocation(target.value); 
  };

  const handleClick = (id) => {
    fetchDeleteTown(id)
      .then(town => dispatch(deleteTown(town._id)));
    history.push('/towns');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUpdateTown(id, data)
      .then(town => dispatch(updateTown(town, id)));
  };

  return (
    <section>
      <section>
        <p>Town Name: {townData.name}</p>
        <p>Town Food: {townData.food}</p>
        <p>Town Law: {townData.law}</p>
        <p>Town Population: {townData.population}</p>
        <p>Town Production: {townData.production}</p>
        <p>Town Traffic: {townData.traffic}</p>
        <p>Town Location: {townData.location}</p>
        <button onClick={() => handleClick(id)}>Delete</button>
      </section>
      <section>
        <label>Update Your Town Here: </label>
        <form onSubmit={handleSubmit}>
          <label>
        Town Name
            <input type='text' name='name' value={name} onChange={handleChange} required />
          </label>
          <label>
        Town Food
            <input type='number' name='food' value={food} onChange={handleChange} required />
          </label>
          <label>
        Town Law
            <input type='number' name='law' value={law} onChange={handleChange} required />
          </label>
          <label>
        Town Population
            <input type='number' name='population' value={population} onChange={handleChange} required />
          </label>
          <label>
        Town Production
            <input type='number' name='production' value={production} onChange={handleChange} required />
          </label>
          <label>
        Town Traffic
            <input type='number' name='traffic' value={traffic} onChange={handleChange} required />
          </label>
          <label>
        Town Location
            <input type='text' name='location' value={location} onChange={handleChange} required />
          </label>

          <button>SUBMIT</button>
        </form>
      </section>
    </section>
  );
};

export default Town;
