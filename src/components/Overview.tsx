import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initiateGetCommits } from '../services/resources';

const Overview = (props: any) => {
	const {dispatch, commits} = props;

	useEffect(() => {
		dispatch(initiateGetCommits());
	}, [dispatch]);

	return (
		<div className="overview">
			{commits ? commits.length : []}
		</div>
	);
};

const mapStateToProps = (state: { commits: any; }) => {
	return {
		commits: state.commits
	};
};

export default connect(mapStateToProps)(Overview);
