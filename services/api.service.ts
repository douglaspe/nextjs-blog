import { create } from 'apisauce';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Api = create({
  baseURL: publicRuntimeConfig.baseURL,
});

Api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default Api;
