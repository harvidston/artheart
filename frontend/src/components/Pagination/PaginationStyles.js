import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';


export const MainContainer = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	width: 100%;
`

export const PaginationContainer = styled.div`
	margin-top: 20px;
	max-height: 80px;
`
export const PaginationItemButton = styled.button`
	height: 60px;
	width: 60px;
	margin-right: 10px;
	background: transparent;
	color: white;
	font-size: 18px;
	border: none;
	border: 1px solid #2b2d2e;
	cursor: pointer;
	border-radius: 5px;
	&:focus{
		outline: none;
		background: #6a8b86;
	}
`



export const MiddleContainer = styled.div`
	height: 150px;
	display: flex;
	align-items: center;
	margin-top: 20px;
`
export const LeftContainer = styled.div`
	height: 100%;
	width: 35%;
`
export const RightContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 35%;
`
export const SwitchButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60%;
	width: 30%;
	border: 1px solid #2b2d2e;
	border-radius: 10px;
	
	padding-left: 10px;
	padding-right: 10px;
`
export const SwitchPublicationsButton = styled.button`
	height: 70px;
	width: 50%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;
	color: white;
	background: transparent;
	transition: 0.5s;

	&:focus{
		outline: none;
		background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	}
	&:active {
		background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);

  }

`
export const SwitchProductsButton = styled.button`
	height: 70px;
	width: 50%;
	border: none;
	cursor: pointer;
	border-radius: 5px;

	font-size: 20px;
	font-weight: 600;
	color: white;
	background: transparent;
	transition: 0.5s;
	&:focus{
		background: #899C88;
		background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	}
	&.active {
		background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
  }

`

export const SearchContainer = styled.div`
	width: 70%;
	display: flex;
	justify-content: center;
`
export const CartButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 70px;
	width: 50%;
`
export const CartButton = styled.button`
	border: none;
	background:	transparent;
	font-size: 32px;
	color: #c4c4c4;
	cursor: pointer;
	margin-left: 90px;


`
	





