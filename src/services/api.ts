import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_ACCESS_TOKEN, REACT_APP_GITHUB_REPO } from '../utils/constants';
import { TCommit } from '../utils/interfaces';

const requestConfig = {
	headers: {
		'Accept': 'application/vnd.github.v3+json',
		'Authorization': `Bearer ${REACT_APP_ACCESS_TOKEN}`
	},
	params: {
		'per_page': 100
	}
};

export const get = async (endPoint: string, config?: AxiosRequestConfig): Promise<TCommit[]> => {
	const result = await axios.get(`${REACT_APP_GITHUB_REPO}/${endPoint}`, Object.assign(requestConfig, config));
	return result.data;
};
