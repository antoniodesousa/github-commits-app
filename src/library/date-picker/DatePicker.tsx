import React from 'react';
import { default as AntDDatePicker, DatePickerProps, RangePickerProps } from 'antd/lib/date-picker';
import { Moment } from "moment";

export type TDatePickerProps = DatePickerProps;
export type TRangePickerProps = Omit<RangePickerProps, 'onChange'> & {
	onChange(dates: [Moment, Moment], dateStrings?: [string, string]): void;
};

const DatePicker = (props: TDatePickerProps): JSX.Element => {
	return <AntDDatePicker {...props}/>;
};

const AntDRangePicker = AntDDatePicker.RangePicker;

const RangePicker = (props: TRangePickerProps): JSX.Element => {
	return <AntDRangePicker {...props as RangePickerProps}/>;
};

export { DatePicker, RangePicker };
