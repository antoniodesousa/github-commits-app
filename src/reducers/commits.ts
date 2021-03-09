import { SET_COMMITS } from '../utils/constants';
import { TCommit } from "../utils/interfaces";

export type TCommitsAction = {
	type?: string;
	commits?: TCommit[];
}

const commitsReducer = (state = [], action: TCommitsAction) => {
	const {type, commits} = action;
	switch (type) {
		case SET_COMMITS:
			return commits;
		default:
			return state;
	}
};

export { commitsReducer };
