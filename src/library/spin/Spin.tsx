import React from 'react';
import { default as AntDSpin, SpinProps } from 'antd/lib/spin';

export type TSpinProps = SpinProps;

const Spin = (props: TSpinProps): JSX.Element => {
	return <AntDSpin {...props}/>;
};

export { Spin };
