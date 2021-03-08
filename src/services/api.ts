import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_ACCESS_TOKEN } from '../utils/constants';

const requestConfig = {
	headers: {
		'Authorization': `Bearer ${REACT_APP_ACCESS_TOKEN}`
	}
};

export const get = async (url: string, config?: AxiosRequestConfig) => {
	const result = await axios.get(url, Object.assign(requestConfig, config));
	return result.data;
};
