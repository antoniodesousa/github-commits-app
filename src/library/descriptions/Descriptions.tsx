import React from 'react';
import { default as AntDDescriptions, DescriptionsProps } from 'antd/lib/descriptions';
import { DescriptionsItemProps } from 'antd/lib/descriptions/item';

export type TDescriptionsProps = DescriptionsProps;

const Descriptions = (props: TDescriptionsProps): JSX.Element => {
	const {children, ...rest} = props;
	return <AntDDescriptions {...rest}>{children}</AntDDescriptions>;
};

Descriptions.Item = (props: DescriptionsItemProps): JSX.Element => {
	const {children, ...rest} = props;
	return <AntDDescriptions.Item {...rest}>{children}</AntDDescriptions.Item>;
};

export { Descriptions };
