import { create } from 'apisauce';

const Api = create({
  baseURL: process.env.BASE_URL,
});

Api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default Api;
