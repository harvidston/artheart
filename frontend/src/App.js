import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/NavBar';
import ShowNavBar from './components/ShowNavBar';
import Router from './components/Router';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	font-family: 'Unbounded', cursive;
 }
`

function App() {
  return (
	  <>
		<Global/>
		<BrowserRouter>
			<ShowNavBar>
				<Navbar/>
			</ShowNavBar>
			<Router/>
		</BrowserRouter>
	  </>
  );
}

export default App;
