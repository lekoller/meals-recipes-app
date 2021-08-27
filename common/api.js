import apisauce from 'apisauce';
import {URL_BASE} from './constants';

const debugMode = false;

const apiRest = apisauce.create({
  baseURL: `${URL_BASE}`,
  timeout: 30000,
});

apiRest.addAsyncRequestTransform(async request => {
  apiRest.setBaseURL(`${URL_BASE}`);
});

const debugme = async response => {
  debugMode &&
    console.log({
      url: `${response.config.method} ${response.config.url}`,
      headers: JSON.stringify(response.config.headers),
      params: JSON.stringify(response.config.params),
      data: JSON.stringify(response.config.data),
      response: JSON.stringify(response.data),
    });
};

apiRest.addResponseTransform(response => {
  if (response.config) {
    debugme(response);
  }
});

const prepareRequestHeaders = async request => {
  if (!request) {
    return;
  }
  request.headers['Content-Type'] = 'application/json;charset/UTF-8';
};

export {apiRest, prepareRequestHeaders};
