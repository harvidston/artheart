import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';

export const CategoriesContainer = styled.div`
	width: 15vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	background: transparent;
	padding-top: 70px;
`
export const CategoriesWidget = styled.div`
`
export const SelectCategoryButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 270px;
	height: 75px;

	font-size: 20px;
	font-weight: 600;
	border-radius: 10px;
	border:none;
	border: 1px solid #2b2d2e;
	cursor: pointer;
	color: white;

	user-select: none;
	-moz-user-select: none;

	animation: fadeIn 5s;
	margin-bottom: 10px;
	transition: 0.5s;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }

	}
	display: none;
`
export const SearchingIcon = styled.div`
	margin-top: 12px;
	color: red;
	z-index: 1000;
`
export const CategoryList = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	width: 260px;
	transition: 0.2s linear;
	padding: 10px 0;
	transition-timing-function: cubic-bezier(0.7, 0.98, 0, -0.02);
	animation: fadeIn 2s;
	background: transparent;
	border: 1px solid #2b2d2e;
	margin-left: 5px;

	&:hover{
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`
export const CategoryListItem = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	width: 240px;

	border: none;
	border-radius: 7px;
	color: white;
	cursor: pointer;
	font-size: 17px;
	font-weight: 300;
	background: transparent;

	transition: 0.5s;
	&:hover{
		background : #6a8b86;
	}

	&:focus{
		background : #6a8b86;
	}
`
export const CategoryName = styled.div`
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;

	&:hover{
		//filter: drop-shadow(5px 10px 1.1px rgba(0,0,0,0.9));
	}
`
