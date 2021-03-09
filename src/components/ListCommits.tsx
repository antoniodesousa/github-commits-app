import React from 'react';
import moment from 'moment';
import { Table } from '../library/table/Table';
import { TCommit } from '../utils/interfaces';
import { useHistory } from 'react-router-dom';

export interface IListCommits {
	source: TCommit[];
}

const ListCommits = (props: IListCommits): JSX.Element => {
	const {source} = props;
	const history = useHistory();

	const columns = [
		{
			title: 'Message',
			dataIndex: 'message'
		},
		{
			title: 'Date',
			dataIndex: 'date',
		},
	];

	const data = source
		.map((commit) => {
			return {
				key: commit.sha,
				message: commit.commit.message,
				date: moment(commit.commit.author.date).format('MMMM Do YYYY, H:mm:ss'),
				timestamp: Date.parse(commit.commit.author.date)
			};
		})
		.sort((a, b) => b.timestamp - a.timestamp);

	return (
		<Table columns={columns}
		       dataSource={data}
		       onRow={(record) => {
			       return {
				       onClick: () => history.push(`/details/${record.key}`)
			       };
		       }}
		       pagination={{pageSize: 8}}
		       scroll={{y: 'calc(100vh - 14em)'}}
		       bordered={true}/>
	);
};

export { ListCommits };
