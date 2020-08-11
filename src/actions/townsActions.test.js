const { setTowns, SET_TOWNS } = require('./townsActions');

describe('towns actions', () => {
  it('creates a set characters action', () => {
    const action = setTowns([
      {
        name: 'My town',
        food: 1,
        law: 1,
        population: 1,
        production: 1,
        traffic: 1,
        location: 'mine'
      }
    ]);

    expect(action).toEqual({
      type: SET_TOWNS,
      payload: [
        {
          name: 'My town',
          food: 1,
          law: 1,
          population: 1,
          production: 1,
          traffic: 1,
          location: 'mine'
        } 
      ]
    });
  });
});
