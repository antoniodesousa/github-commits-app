import { SET_COMMITS } from '../utils/constants';
import { TCommit } from "../utils/interfaces";

export type TAction = {
	type?: string;
	commits?: TCommit[];
}

const commitsReducer = (state = [], action: TAction) => {
	const {type, commits} = action;
	switch (type) {
		case SET_COMMITS:
			return commits;
		default:
			return state;
	}
};

export { commitsReducer };
