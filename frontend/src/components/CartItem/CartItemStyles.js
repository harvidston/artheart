import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';


export const RemoveFromCartButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	font-size: 26px;
	color: #2b2d2e;
	color: #c4c4c4;
	background: transparent;
	cursor: pointer;
	border: none;
	transition: 0.5s;

	&:hover{
		scale: 1.1;
	}
`
export const RemoveFromCartButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90%;
	width: 10%;
`
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
export const CartProductCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 80%; 
	//min-height: 300px;
	//max-height: 600px;
	max-height: 420px;
	background: transparent;
	float: left;
	break-inside: avoid;	
	text-align: center;
	box-shadow: 0px 0px 15px 5px #000;
	animation: fadeIn 3s;

	transition: 0.5s;
	border-bottom: 1px solid #2b2d2e;
	border-radius: 20px;
	border: 1px solid #2b2d2e;
	padding-left: 15px;
	padding-top: 15px;
	padding-bottom: 15px;
	margin-bottom: 20px;

	&:hover{
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`





export const CartProductImgContainer = styled.div`
	display: flex;
	align-items: center;
	width: 20%;
	//height: 90%;
`
export const CartProductImg = styled.img`
	width: 100%;
	object-fit: contain;
	border-radius: 10px;
	transition: 0.5s;
	
`
export const CartProductTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90%;
	width: 45%;
`
export const CartProductTitle = styled.div`
	color: white;
	font-size: 22px;
	font-weight: 600;
	margin: 0px 10px 5px 10px;
`
export const CartProductPriceContainer = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	height: 90%;
	width: 20%;
`
export const CartProductPrice = styled.div`
	font-size: 22px;
	font-weight: 600;
	color: #6a8b86;
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
