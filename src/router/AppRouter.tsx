import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from '../components/App';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="main">
				<Switch>
					<Route
						path="/"
						exact={true}
						render={App}
					/>
					<Route component={() => <div>Page not found</div>}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export { AppRouter };
