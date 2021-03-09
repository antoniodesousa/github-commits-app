import React from 'react';
import { default as AntDButton, ButtonProps } from 'antd/lib/button';

export type TButtonProps = ButtonProps;

const Button = (props: TButtonProps): JSX.Element => {
	const {children, ...rest} = props;
	return <AntDButton {...rest}>{children}</AntDButton>;
};

export { Button };
