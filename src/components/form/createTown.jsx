import React from 'react';
import { useCreateTownHook } from '../../hooks/createTownHooks';
// const { useDispatch } = require('react-redux');

const CreateTown = () => {
  // const dispatch = useDispatch();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(CreateTown(sometypeofstateithink?))
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={name} onChange={handleChange} required />
        <input type='number' name='food' value={food} onChange={handleChange} required />
        <input type='number' name='law' value={law} onChange={handleChange} required />
        <input type='number' name='population' value={population} onChange={handleChange} required />
        <input type='number' name='production' value={production} onChange={handleChange} required />
        <input type='number' name='traffic' value={traffic} onChange={handleChange} required />
        <input type='text' name='location' value={location} onChange={handleChange} required />
        <button>SUBMIT</button>
      </form>
    </section>
  );
};

export default CreateTown;
