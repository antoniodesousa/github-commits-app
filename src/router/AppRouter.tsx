import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Overview from '../components/Overview';
import Details from '../components/Details';

const AppRouter = (): JSX.Element => {
	return (
		<BrowserRouter>
			<div className="main">
				<Switch>
					<Route
						path="/"
						exact={true}
						render={() => <Overview/>}
					/>
					<Route
						path="/details/:sha"
						render={() => <Details/>}
					/>
					<Route component={() => <div>Page not found</div>}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export { AppRouter };
