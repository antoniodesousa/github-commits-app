import React from 'react';
import moment from 'moment';
import { TCommit } from '../utils/interfaces';
import { Descriptions } from '../library/descriptions/Descriptions';
import { DATE_FORMAT } from '../utils/constants';

export interface ICommitDetails {
	commit: TCommit;
}

const CommitDetails = (props: ICommitDetails): JSX.Element => {
	const {commit} = props;
	const {author, message} = commit.commit;

	return (
		<Descriptions className={'details-box'} layout="vertical" bordered>
			<Descriptions.Item label="Author">{author.name}</Descriptions.Item>
			<Descriptions.Item label="Email">{author.email}</Descriptions.Item>
			<Descriptions.Item label="Date">{moment(author.date).format(DATE_FORMAT)}</Descriptions.Item>
			<Descriptions.Item label="Message" span={3}>{message}</Descriptions.Item>
		</Descriptions>
	);
};

export { CommitDetails };
