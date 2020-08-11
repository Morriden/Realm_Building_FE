import { useState } from 'react';

export const useCreateTownHook = () => {
  const [name, setName] = useState('');
  const [food, setFood] = useState(1);
  const [law, setLaw] = useState(1);
  const [population, setPopulation] = useState(1);
  const [production, setProduction] = useState(1);
  const [traffic, setTraffic] = useState(1);
  const [location, setLocation] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'food') setFood(target.value);
    if(target.name === 'law') setLaw(target.value);
    if(target.name === 'population') setPopulation(target.value);
    if(target.name === 'production') setProduction(target.value);
    if(target.name === 'traffic') setTraffic(target.value);
    if(target.name === 'location') setLocation(target.value); 
  };

  return {
    name,
    food,
    law,
    population,
    production,
    traffic,
    location,
    handleChange
  };
};
