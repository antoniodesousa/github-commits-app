import React from 'react';
import { default as AntDDatePicker, DatePickerProps, RangePickerProps } from 'antd/lib/date-picker';

export type TDatePickerProps = DatePickerProps;
export type TRangePickerProps = RangePickerProps;

const DatePicker = (props: TDatePickerProps): JSX.Element => {
	return <AntDDatePicker {...props}/>;
};

const AntDRangePicker = AntDDatePicker.RangePicker;

const RangePicker = (props: TRangePickerProps): JSX.Element => {
	return <AntDRangePicker {...props}/>;
};

export { DatePicker, RangePicker };
