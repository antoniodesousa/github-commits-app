import {SET_COMMITS, ADD_COMMITS} from '../utils/constants';
import { get } from "./api";

export const setCommits = (commits: any) => ({
	type: SET_COMMITS,
	commits
});

export const addCommits = (commits: any) => ({
	type: ADD_COMMITS,
	commits
});

export const initiateGetCommits = () => {
	return async (dispatch: (arg0: { type: string; commits?: any; }) => void) => {
		try {
			let commits = await get('https://api.github.com/repos/facebook/react/commits');
			return dispatch(setCommits(commits));
		} catch (error) {
			console.log('error', error);
		}
	};
};
