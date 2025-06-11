import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';



export const FeedCard = styled.div`
	height: max-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: transparent;
	background-image: linear-gradient(to left top, #000000, #060606, #0c0c0c, #111111, #151515);
	border: 1px solid #2b2d2e;
	border-radius: 30px;
	margin-bottom: 30px;

	transition: 0.5s;
	box-shadow: 0px 0px 30px 20px #000;
`

export const CreatorContainer = styled.div`
	display: flex;
	width: 95%;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;
`

export const CreatorInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 90%;

`
export const CreatorName = styled.div`
	width: 100%;
	font-size: 20px;
	color: white;
	font-weight: 600;
	margin-top: 5px;
	cursor: default;

`
export const CreatorImgContainer = styled.div`
	height: 80px;
	width: 80px;
	width: 10%;
`
export const CreatorImg = styled.img`
	height: 100%;
	width: 100%;
	height: 80px;
	width: 80px;
	border-radius: 20px;
	border-radius: 50%;
	border: 1px solid #2b2d2e;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const CreatorBtn = styled.button`
	width: max-content;
	display: flex;
	color: #899C88;
	color: #6a8b86;
	font-size: 16px;
	font-weight: 300;
	background: transparent;
	border: none;
	cursor: pointer;
	&:hover{
		text-decoration: underline;
	}
`

export const FeedItemTitle = styled.div`
	width: 92%;
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 300;

	margin-top: 20px;
	margin-bottom: 20px;
`
export const FeedItemImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	max-width: 90vh;
	break-inside: avoid;	
	padding-right: 35px;
	padding-left: 35px;
`

export const FeedItemImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 10px;
	cursor: pointer;
`
export const FeedItemActions = styled.div`
	width: 95%;
	float:	left; 
	font-size: 32px;
	color: #616161;
	margin-top: 20px;
	margin-bottom: 15px;
	cursor: pointer;

`

export const ActionItem = styled.div`
	display: inline-block;
	margin-left: 10px;

	transition: 0.2s;
	&:hover{
		color: #899c88;
		color: #6a8b86;
	}
`
export const ArtWorkPrice = styled.div`
`
export const ArtistContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 140px;
	width: 95%;
	border-top: 1px solid #2b2d2e;
`
export const ArtistImgContainer = styled.div`
	width: 80px;
	height: 80px;
`
export const ArtistImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	border: 1px solid #2b2d2e;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const LikesAmount = styled.div`
	float: right;
	padding-left: 5px;
	padding-top: 7px;
	font-size: 14px; 
	margin-right: 25px;
`
export const CommentsAmount = styled.div`
	
	float: right;
	padding-left: 5px;
	padding-top: 7px;
	font-size: 14px; 

`
export const ArtistCommentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 100%;
`
export const CommentInput = styled.input`
	height: 80px;
	width: 100%;

	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;

	padding-right: 20px;
	padding-left: 20px;

	font-size: 18px;
	color: white;
	font-weight: 300;
	outline: none;

	&:focus{
		border: 1px solid #2b2b2e; 
	}
`
