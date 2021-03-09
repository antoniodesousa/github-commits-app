import { SET_COMMITS } from '../utils/constants';
import { TCommit } from '../utils/interfaces';
import { TAction } from '../reducers/commits';
import { get } from "./api";

export const setCommits = (commits: TCommit[]) => ({
	type: SET_COMMITS,
	commits
});

export const initiateGetCommits = () => {
	return async (dispatch: (action: TAction) => void): Promise<void> => {
		try {
			let commits = await get('commits');
			return dispatch(setCommits(commits));
		} catch (error) {
			console.log('error', error);
		}
	};
};
