import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_ACCESS_TOKEN, REACT_APP_GITHUB_REPO } from '../utils/constants';
import { TCommit } from '../utils/interfaces';

const requestConfig = {
	headers: {
		'Authorization': `Bearer ${REACT_APP_ACCESS_TOKEN}`
	}
};

export const get = async (endPoint: string, config?: AxiosRequestConfig): Promise<TCommit[]> => {
	const result = await axios.get(`${REACT_APP_GITHUB_REPO}/${endPoint}`, Object.assign(requestConfig, config));
	return result.data;
};
