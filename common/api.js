import apisauce from 'apisauce';
import {URL_BASE} from './constants';

export const apiRest = apisauce.create({
  baseURL: `${URL_BASE}`,
  timeout: 30000,
});

export const prepareRequestHeaders = async request => {
  if (!request) return;
  request.headers['Content-Type'] = 'application/json;charset/UTF-8';
};
