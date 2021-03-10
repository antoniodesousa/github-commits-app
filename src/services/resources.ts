import { SET_COMMITS, SET_DETAILS } from '../utils/constants';
import { TCommit } from '../utils/interfaces';
import { TCommitsAction } from '../reducers/commits';
import { AxiosRequestConfig } from 'axios';
import { get } from "./api";

export const setCommits = (commits: TCommit[]) => ({
	type: SET_COMMITS,
	commits
});

export const setCommit = (commit: TCommit[]) => ({
	type: SET_DETAILS,
	commit
});

export const getCommits = (config?: AxiosRequestConfig) => {
	return async (dispatch: (action: TCommitsAction) => void): Promise<void> => {
		try {
			const commits = await get('commits', config);
			return dispatch(setCommits(commits));
		} catch (error) {
			console.log('error', error);
		}
	};
};

export const getCommit = (commits: TCommit[], sha: string) => {
	return async (dispatch: (action: TCommitsAction) => void): Promise<void> => {
		try {
			let commit: any;

			if (commits?.length) {
				commit = commits.find((commit) => commit.sha === sha);
			} else {
				commit = await get(`commits/${sha}`);
			}

			return dispatch(setCommit(commit));
		} catch (error) {
			console.log('error', error);
		}
	};
};
