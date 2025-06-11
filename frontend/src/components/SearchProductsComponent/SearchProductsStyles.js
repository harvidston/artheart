import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';

export const SearchContainer = styled.div`

	height: 80px;	
	height: 7vh;
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	background: transparent;
`

export const SearchBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #0F0E0E;
	background: transparent;
`
export const ClickToSearchBtn = styled.button`
	display: flex;
	position: relative;
	height: 60px;
	width: 200px;
	align-items: center;
	justify-content: center;
	
	box-sizing: border-box;
	border-radius: 25px;
	border: none;
	border: 1px solid #2b2d2e;
	box-shadow: 0 0 40px 5px #000;

	cursor: pointer;
	transition: 1.5s;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);

	user-select: none;
	-moz-user-select: none;

	${({ clicked}) => clicked && css`
		width: 400px;
		width: 100%;
		background: transparent;
		justify-content: start;
		box-shadow: 0px 0px 0px 0px #000;
		border: none;
	`}

	@keyframes pop{
		50%  {transform: scale(0.86)}
		100%  {transform: scale(1)}

	}
`;


export const SearchInput = styled.input`
	position: absolute;
	height: 60px;
	width: 70%;
	opacity: 100%;
	border-radius: 15px;
	border: none;
	font-size: 16px;
	color: white;
		color: #c4c4c4;
	align-items: center;
	padding-left: 20px;	
	padding-right: 20px;
	cursor: text;
	outline: none;
	background: transparent;
	border: 1px solid #303030;
	display: ${(props) => (props.showSearchInput ? "block" : "none")};
	width: 71%;
`;
 

export const TitlePreview = styled.div`
	display: flex;
	animation: fadeIn 4s;
	font-size: 19px;
	font-weight: 600;

	justify-content: center;
	align-items: center;
	color: white;
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`

export const GreenLoading = styled.div`
	z-index: 999;
	height: 20px;
	width: 20px;
	padding-right: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ABC4AA;

`
export const SearchBtnContainer = styled.div`
	position: absolute;
	height: 60px;
	width: 47px; 
	display: flex;
	justify-content: center;
	align-items: center;
	right: 25px;
	color: white;

`
export const SearchBtn = styled.button`
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	color: white;
	border: none;
	cursor: pointer; 
	background: transparent;
	animation: fadeIn 4s;
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`
export const LoadingButtonContainer = styled.div`
	width: 100%;
	height: 60px;
	align-items: center;
	justify-content: end;
	display: flex;
	padding-right: 25px;
`
export const LoadingButton = styled.div`
	position: absolute;

    width: 45px;
    height: 45px;
    border-radius: 50%;
	font-size: 16px;
	border: 1px solid transparent;
	border-left: 1px solid #ABC4AA;
	border-bottom: 1px solid #ABC4AA;
	box-shadow: none;
	outline: none;

	animation: spin 1s  ease infinite;
	@keyframes spin {
			0% {
				transform: rotate(0turn)
			}
			100% {
				transform: rotate(1turn);
			}
	}
`
