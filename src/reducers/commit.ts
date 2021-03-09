import { SET_DETAILS } from '../utils/constants';
import { TCommit } from "../utils/interfaces";

export type TCommitAction = {
	type?: string;
	commit?: TCommit;
}

const commitReducer = (state = {}, action: TCommitAction) => {
	const {type, commit} = action;
	switch (type) {
		case SET_DETAILS:
			return commit;
		default:
			return state;
	}
};

export { commitReducer };
