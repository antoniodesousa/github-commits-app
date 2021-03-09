import React, { useEffect } from 'react';
import moment from 'moment';
import { connect, DispatchProp } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TCommit } from '../utils/interfaces';
import { initiateGetCommit } from '../services/resources';
import { Descriptions } from '../library/descriptions/Descriptions';
import { Button } from '../library/button/Button';

export interface IDetails extends DispatchProp<any> {
	commits: TCommit[];
	commit: TCommit;
}

const Details = (props: IDetails): JSX.Element => {
	const {dispatch, commits, commit} = props;
	const {sha} = useParams() as { sha: string; };
	const history = useHistory();

	useEffect(() => {
		void dispatch(initiateGetCommit(commits, sha));
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
