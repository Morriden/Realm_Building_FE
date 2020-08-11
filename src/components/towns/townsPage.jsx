import React, { useEffect } from 'react';
import Towns from './Towns';
import { fetchTowns } from '../../services/fetchTowns';
import { useDispatch } from 'react-redux';
import { setTowns } from '../../actions/townsActions';

const TownsPage = () => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    fetchTowns()
      .then(towns => {
        dispatch(setTowns(towns));
      });
  }, []);

  return (
    <>
      <Towns />
    </>
  );
};

export default TownsPage;
