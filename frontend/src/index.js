import React from 'react';
import {Provider} from 'react-redux'
import platform from './platform'
import './Global.css';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={platform}>
		<App />
	</Provider>
);

