export const fetchTowns = () => {
  return fetch(`${process.env.API_URL}/api/v1/towns`)
    .then(res => res.json());
};

export const fetchPostTowns = (data) => {
  return fetch(`${process.env.API_URL}/api/v1/towns`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const fetchDeleteTown = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/towns/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json());
};

export const fetchUpdateTown = (id, data) => {
  return fetch(`${process.env.API_URL}/api/v1/towns/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
