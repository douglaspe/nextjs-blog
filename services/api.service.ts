import { create } from 'apisauce';

const Api = create({
  baseURL: 'http://localhost:1234',
});

Api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default Api;
