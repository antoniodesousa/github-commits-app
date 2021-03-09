import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Overview from '../components/Overview';

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
					<Route component={() => <div>Page not found</div>}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export { AppRouter };
