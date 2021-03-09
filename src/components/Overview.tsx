import React, { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { initiateGetCommits } from '../services/resources';
import { TCommit } from '../utils/interfaces';
import { ListCommits } from './ListCommits';

export interface IOverview extends DispatchProp<any> {
	commits: TCommit[];
}

const Overview = (props: IOverview): JSX.Element => {
	const {dispatch, commits} = props;

	useEffect(() => {
		void dispatch(initiateGetCommits());
	}, [dispatch]);

	return (
		<div className="overview">
			<h2>List of commits:</h2>
			{commits && <ListCommits source={commits}/>}
		</div>
	);
};

const mapStateToProps = (state: { commits: TCommit[]; }) => {
	return {
		commits: state.commits
	};
};

export default connect(mapStateToProps)(Overview);
