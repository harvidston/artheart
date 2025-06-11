import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ShowNavBar = ({ children }) => {
	const location = useLocation();

	const [showNavbar, setShowNavbar] = useState(false)

	useEffect(() => {
		if (location.pathname === '/authorization'){
			setShowNavbar(false)
		} else {
			setShowNavbar(true)
		}
	}, [location])

	return (
		<>{showNavbar && children}</>
	)
}
export default ShowNavBar;
