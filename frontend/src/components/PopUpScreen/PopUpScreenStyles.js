import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

export const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(0);

	&:active{
		transform: scale(1);
	}
`

export const PopUpContent = styled.div`
	height: 50vh;
	width: 50vh;
	background: #131212;
	border-radius: 30px;

`
export const ClosePopUpButton = styled.button`
	
	height: 2vh;
	width: 2vh;
`
