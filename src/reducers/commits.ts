import { SET_COMMITS, ADD_COMMITS } from '../utils/constants';

const commitsReducer = (state = [], action: { type?: any; commits?: any; }) => {
	const {type, commits} = action;
	switch (type) {
		case SET_COMMITS:
			return commits;
		case ADD_COMMITS:
			return [...state, ...commits];
		default:
			return state;
	}
};

export { commitsReducer };
