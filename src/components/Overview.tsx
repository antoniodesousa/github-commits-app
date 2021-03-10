import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { connect } from 'react-redux';
import { getCommits } from '../services/resources';
import { TCommit } from '../utils/interfaces';
import { ListCommits } from './ListCommits';
import { RangePicker } from '../library/date-picker/DatePicker';
import { Button } from '../library/button/Button';

export interface IOverview {
	dispatch: (fn: any) => Promise<void>;
	commits: TCommit[];
}

const Overview = (props: IOverview): JSX.Element => {
	const {dispatch, commits} = props;
	const [dateRange, setDateRange] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	const handleDateRange = (dates: [Moment, Moment]) => {
		setDateRange(() => {
			return dates ? dates.map((date) => date.toISOString()) : [];
		});
	};

	const handleSearch = () => {
		const config = {
			params: {
				'since': dateRange[0],
				'until': dateRange[1],
				'per_page': 100
			}
		};

		setLoading(true);
		void dispatch(getCommits(config)).then(() => {
			setLoading(false);
		});
	};

	useEffect(() => {
		setLoading(true);
		dispatch(getCommits()).then(() => {
			setLoading(false);
		});
	}, [dispatch]);

	return (
		<div className="overview">
			<h2>List of commits:</h2>
			<div className={'date-range'}>
				<RangePicker
					onChange={handleDateRange}
					disabledDate={(current) => current && current > moment().endOf('day')}/>
				<Button type={'primary'}
				        onClick={handleSearch}
				        disabled={!dateRange.length}>Search</Button>
			</div>
			{commits && <ListCommits source={commits} loading={loading}/>}
		</div>
	);
};

const mapStateToProps = (state: { commits: TCommit[]; }) => {
	return {
		commits: state.commits
	};
};

export default connect(mapStateToProps)(Overview);
