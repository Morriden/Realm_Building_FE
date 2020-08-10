const { default: reducer } = require('./townsReducer');

describe('towns reducer', () => {
  it('handles the set towns action', () => {
    const state = {
      towns: []
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
      towns: [{
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
});
