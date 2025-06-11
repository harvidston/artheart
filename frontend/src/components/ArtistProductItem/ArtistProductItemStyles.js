import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';


export const CreatorBtn = styled.button`
	color: #899C88;
	font-size: 14px;
	font-weight: 300;
	background: transparent;
	border: none;
	cursor: pointer;
	&:hover{
		text-decoration: underline;
	}
`
export const ArtWorkCreator = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
`
export const ArtWorkCard = styled.div`
	width: 17vw; 
	background: #171616;
	border-radius: 15px;
	float: left;
	break-inside: avoid;	
	text-align: center;
	margin-bottom: 22px;
	box-shadow: 0px 0px 15px 5px #000;
	animation: fadeIn 3s;

	transition: 0.5s;
	&:hover{
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`

export const ArtWorkImg = styled.img`
	width: 100%;
	object-fit: contain;
	margin-bottom: 15px;
	//background: red;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	cursor: pointer;
	transition: 0.5s;
	
`
export const ArtWorkTitle = styled.div`
	//margin-bottom: 15px;
	color: #c4c4c4;
	margin: 0px 10px 5px 10px;
	//filter: drop-shadow(5px 4px 10px #000);
`
export const ArtWorkPrice = styled.div`

	float: right;
	font-weight: 600;
	margin-right: 15px;
	margin-bottom: 15px;
	color: #b4c4b4;
	//color: #899c88;
	filter: drop-shadow(2px 1px 1px #000);
`
export const ArtWorkActions = styled.div`
	float:	left; 
	margin-left: 5px;
	font-size: 22px;
	color: #616161;
	margin-bottom: 5px;
	cursor: pointer;
`
export const ArtWorkActionItem = styled.div`

	//filter: drop-shadow(1px 2px 30px #000);
	display: inline-block;
	margin-left: 10px;

	//background: grey;

	transition: 0.2s;
	&:hover{
		color: #899c88;
	}
`
export const LikesAmount = styled.div`
	//display: inline-block;
	//margin-bottom: 10px;
	float: right;
	padding-left: 2px;
	padding-top: 5px;
	font-size: 10px; 
	//background: orange;
`
export const CommentsAmount = styled.div`
	
	float: right;
	padding-left: 2px;
	padding-top: 5px;
	font-size: 10px; 

`
