import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:1234',
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

const apiPost = async (user) => {
  try {
    const response = await api.post('/api/register', user);

    return response;
  } catch (err) {
    return err;
  }
};

const auth = async (user) => {
  try {
    const response = await api.post('/api//authenticate', user);
    return response;
  } catch (err) {
    return err;
  }
};

export { apiPost, auth };
