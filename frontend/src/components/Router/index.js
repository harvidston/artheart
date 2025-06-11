import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from '../../routes';

const Router = () => {
	return(
		<Routes>
			{routes.map(route => 
				<Route element = {<route.element/>} path = {route.path} exact = {route.exact}/>
			)}
		</Routes>
	);
};
export default Router;
