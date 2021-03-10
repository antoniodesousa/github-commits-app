import React from 'react';
import moment from 'moment';
import { Table } from '../library/table/Table';
import { TCommit } from '../utils/interfaces';
import { DATE_FORMAT } from '../utils/constants';
import { useHistory } from 'react-router-dom';

export interface IListCommits {
	source: TCommit[];
	loading: boolean;
}

const CommitsList = (props: IListCommits): JSX.Element => {
	const {source, loading} = props;
	const history = useHistory();

	const columns = [
		{
			title: 'Message',
			dataIndex: 'message',
			width: '70%'
		},
		{
			title: 'Date',
			dataIndex: 'date',
			width: 240
		}
	];

	const data = source
		.map((commit) => {
			return {
				key: commit.sha,
				message: commit.commit.message,
				date: moment(commit.commit.author.date).format(DATE_FORMAT),
				timestamp: Date.parse(commit.commit.author.date)
			};
		})
		.sort((a, b) => b.timestamp - a.timestamp);

	return (
		<Table columns={columns}
		       dataSource={data}
		       onRow={(record) => ({onClick: () => history.push(`/details/${record.key}`)})}
		       pagination={{
			       hideOnSinglePage: true,
			       defaultPageSize: 8,
			       pageSizeOptions: ['8', '16', '32', '64']
		       }}
		       scroll={{y: 'calc(100vh - 216px)'}}
		       loading={loading}
		       bordered={true}/>
	);
};

export { CommitsList };
