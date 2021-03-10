import axios from 'axios';
import { get } from './api';
import { commit } from '../mocks/commit';

const axiosGet = jest.spyOn(axios, 'get');

describe('API Service', () => {
	it('should fetch successfully data from an API', async () => {
		const data = [commit];

		axiosGet.mockImplementationOnce(() => Promise.resolve({data}));

		await expect(get('commits')).resolves.toEqual(data);
	});

	it('should fetch erroneously data from an API', async () => {
		const errorMessage = 'Network Error';

		axiosGet.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

		await expect(get('commits')).rejects.toThrow(errorMessage);
	});
});
