import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TCommit } from '../utils/interfaces';
import { getCommit } from '../services/resources';
import { Button } from '../library/button/Button';
import { Spin } from '../library/spin/Spin';
import { CommitDetails } from './CommitDetails';

export interface IDetails {
	dispatch: (fn: any) => Promise<void>;
	commits: TCommit[];
	commit: TCommit;
}

const Details = (props: IDetails): JSX.Element => {
	const {dispatch, commits, commit} = props;
	const [loading, setLoading] = useState(false);
	const {sha} = useParams() as { sha: string; };
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		dispatch(getCommit(commits, sha)).then(() => {
			setLoading(false);
		});
	}, [dispatch, commits, sha]);

	return (
		<div className="details">
			<h2>Commit details:</h2>
			{commit?.commit && <CommitDetails commit={commit}/>}
			{loading && (
				<div className={'loading'}>
					<Spin/>
				</div>
			)}
			<div className={'footer'}>
				<Button type={'primary'} onClick={() => history.push('/')}>Back</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state: { commits: TCommit[]; commit: TCommit; }) => {
	return {
		commits: state.commits,
		commit: state.commit
	};
};

export default connect(mapStateToProps)(Details);
