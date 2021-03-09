import React from "react";
import { default as AntDTable, TableProps } from 'antd/lib/table';

export type TTableProps = TableProps<any>;

const Table = (props: TTableProps): JSX.Element => {
	return <AntDTable {...props}/>;
};

export { Table };
