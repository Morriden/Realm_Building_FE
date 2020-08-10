import React from 'react';
const { useDispatch } = require('react-redux');

const CreateTown = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <form>
        <input type='text' value={name} onChange={({ target }) => setName(target.value)} />     
      </form>
    </section>
  );
};
