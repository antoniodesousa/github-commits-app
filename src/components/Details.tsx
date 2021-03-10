import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TCommit } from '../utils/interfaces';
import { getCommit } from '../services/resources';
import { Descriptions } from '../library/descriptions/Descriptions';
import { Button } from '../library/button/Button';
import { Spin } from '../library/spin/Spin';

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
			{commit?.commit && (
				<Descriptions className={'details-box'} layout="vertical" bordered>
					<Descriptions.Item label="Author">{commit.commit.author.name}</Descriptions.Item>
					<Descriptions.Item label="Email">{commit.commit.author.email}</Descriptions.Item>
					<Descriptions.Item label="Date">
						{moment(commit.commit.author.date).format('MMMM Do YYYY, H:mm:ss')}
					</Descriptions.Item>
					<Descriptions.Item label="Message" span={3}>{commit.commit.message}</Descriptions.Item>
				</Descriptions>
			)}
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
