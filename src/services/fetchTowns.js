export const fetchTowns = () => {
  return fetch('http://localhost:7890/api/v1/towns')
    .then(res => res.json());
};
