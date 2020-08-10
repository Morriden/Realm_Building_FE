const { default: reducer } = require('./townsReducer');
const { setTowns, createTown } = require('../actions/townsActions');

describe('towns reducer', () => {
  it('handles the set towns action', () => {
    const state = {
      savedTowns: []
    };
    const action = setTowns([{
      name: 'My town',
      food: 1,
      law: 1,
      population: 1,
      production: 1,
      traffic: 1,
      location: 'mine'
    }]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      savedTowns: [{
        name: 'My town',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: 'mine'
      }]
    });
  });
  it('handles the create towns action', () => {
    const state = {
      createTown: {
        name: '',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: ''
      },
      savedTowns: [{
        name: 'oregon',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: 'quarry'
      }]
    };
    const action = createTown({
      name: 'Drexlor',
      food: 1,
      law: 1,
      population: 1,
      production: 1,
      traffic: 1,
      location: 'river'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      savedTowns: [{
        name: 'oregon',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: 'quarry'
      },
      {
        name: 'Drexlor',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: 'river'
      }
      ]
    });
  });
});
