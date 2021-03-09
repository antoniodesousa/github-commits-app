import React from 'react';
import { Table } from '../library/table/Table';
import { TCommit } from '../utils/interfaces';

export interface IListCommits {
	source: TCommit[];
}

const ListCommits = (props: IListCommits): JSX.Element => {
	const {source} = props;

	const columns = [
		{
			title: 'Message',
			dataIndex: 'message'
		},
		{
			title: 'Timestamp',
			dataIndex: 'timestamp',
		},
	];

	const data = source.map((commit) => {
		return {
			key: commit.sha,
			message: commit.commit.message,
			timestamp: commit.commit.author.date
		};
	});

	return (
		<Table columns={columns}
		       dataSource={data}
		       onRow={(record, rowIndex) => {
			       return {
				       onClick: () => console.log(rowIndex, record)
			       };
		       }}
		       pagination={{pageSize: 8}}
		       scroll={{y: 'calc(100vh - 17em)'}}
		       bordered={true}/>
	);
};

export { ListCommits };
