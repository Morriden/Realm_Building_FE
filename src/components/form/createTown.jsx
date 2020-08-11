import React from 'react';
import { useCreateTownHook } from '../../hooks/createTownHooks';
import { fetchPostTowns } from '../../services/fetchTowns';
import { useDispatch } from 'react-redux';
import { createTown } from '../../actions/townsActions';

const CreateTown = () => {
  const dispatch = useDispatch();

  const {
    name,
    food,
    law,
    population,
    production,
    traffic,
    location,
    handleChange
  } = useCreateTownHook();

  const data = {
    name,
    food,
    law,
    population,
    production,
    traffic,
    location,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPostTowns(data)
      .then(town => dispatch(createTown(town)));
  };

  return (
    <section>
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
  );
};

export default CreateTown;
