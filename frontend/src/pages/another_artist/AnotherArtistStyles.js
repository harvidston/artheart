import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

export const EmptyMessage = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	border-radius: 20px;
	font-size: 18px;
	font-weight: 300;

	user-select: none;
	-moz-user-select: none;
	margin-top: 20px;
	color: #c4c4c4;
`
export const UnfollowButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 270px;
	border-radius: 5px;
	border: none;
	transition: 0.5s;
	font-size: 14px;
	color: #c4c4c4;
	background: transparent;
	cursor: pointer;
	border: 1px solid #2b2d2e;
	user-select: none;
	-moz-user-select: none;

	&:hover{
		border: 1px solid #6a8b86;
	}
`
export const FollowButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 270px;
	border-radius: 5px;
	border: none;
	transition: 0.5s;
	font-size: 14px;
	color: white;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	cursor: pointer;
	border: 1px solid #2b2d2e;
	user-select: none;
	-moz-user-select: none;
	&:hover{

	}
`
export const FollowButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	height: 70px;
	width: 100%;
`
export const SwitchButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60%;
	width: 100%;
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
export const MainContainer = styled.div`
	height: 300vh;
	background: #0F0E0E;	
	color: white;
	display: flex;
	align-items: center;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	flex-direction: column;
	background: #0c0c0c;
`

export const ProductsButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 70px;
	width: 170px;
	border-radius: 20px;
	border: none;
	margin-right: 3vh;
	transition: 0.5s;
	font-size: 14px;
	font-weight: 300;
	color: #988C88;
	color: #899c88;
	background: #171616;
	cursor: pointer;
	border: 1px solid #2b2d2e;
	user-select: none;
	-moz-user-select: none;
	&:hover{
		scale:1.1;
	}

`


export const ArtistInfo = styled.div`
	display: flex;
	justify-content: center;
	height: 44vh;
	height: 650px;
	width: 100vh;
	margin-top: 6vh;
`
export const UserWidgetContainer = styled.div`
	height: 40vh;
	width: 50vh;
	border-radius: 20px;
	background: #171616;
	background: transparent;

	//border: 1px solid #2b2d2e;
`
export const ArtistWorks = styled.div`
	height: 60vh;
	width: 52.5%;
	display: flex;
	justify-content: center;
`
export const ArtWorksWidget = styled.div`
	position: relative;
	color: white;
	background: transparent; 
	columns: 3;
	//grid-template-columns: 20vw 20vw 20vw;
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
export const ArtWorkCard = styled.div`

	width: 15vw; 
	background: #171616;
	border-radius: 15px;
	float: left;
	break-inside: avoid;	
	text-align: center;
	margin-bottom: 15px;
	cursor: pointer;
	animation: fadeIn 3s;

	box-shadow: 0px 0px 15px 5px #000;
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
`

export const ArtWorkTitle = styled.div`
	//margin-bottom: 15px;


	color: #c4c4c4;
	margin: 0px 10px 25px 10px;
	filter: drop-shadow(5px 4px 10px #000);
`

export const ArtWorkActions = styled.div`
	float:	left; 
	margin-left: 5px;
	font-size: 22px;
	color: #616161;

`
export const ArtWorkActionItem = styled.div`

	//filter: drop-shadow(1px 2px 30px #000);
	display: inline-block;
	margin-left: 10px;
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
export const LeftContainer = styled.div`
	height: 100%;
	width: 22vw;

	display: flex;
	justify-content: center;
`

export const UserTopContainer = styled.div`
	height: 20vh;
	width: 100%;
	display: flex;
	justify-content: center;

`
export const UserFollowersContainer = styled.div`
	height: 100%;
	width: 32%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
	-moz-user-select: none;
`

export const FollowingNumber = styled.div`
	color: #c4c4c4;
	font-size: 20px;
	font-weight: 600;

	user-select: none;
	-moz-user-select: none;
`
export const FollowingTitle = styled.div`
	color: #c4c4c4;
	opacity: 70%;
	font-size: 14px;
	font-weight: 300;
	user-select: none;
	-moz-user-select: none;
`
export const FollowersNumber = styled.div`
	color: #c4c4c4;
	font-size: 20px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;

`
export const FollowersTitle = styled.div`
	color: #c4c4c4;
	opacity: 70%;
	font-size: 14px;
	font-weight: 300;
	user-select: none;
	-moz-user-select: none;
`
export const UserImgContainer = styled.div`
	height: 20vh;
	width: 20vh;
	background: transparent;
	border-radius: 20px;
	border: 1px solid #2b2d2e;
	display: flex;
`
export const UserImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const UserFollowingContainer = styled.div`
	height: 100%;
	width: 32%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
	-moz-user-select: none;
`

export const UserFullNameContainer = styled.div`
	color: #c4c4c4;
	color: white;
	font-size: 18px;
	font-weight: 600;
	margin-top: 10px;
	user-select: none;
	-moz-user-select: none;
`
export const UserNameContainer = styled.div`
	color: #c4c4c4;
	color: #899C88;
	color: #6a8b86;
	font-size: 14px;
	font-weight: 300;
	margin-top: 10px;
	user-select: none;
	-moz-user-select: none;
`
export const UserBottomContainer = styled.div`
	max-height: 80px;
	max-width: 100%;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	//padding-bottom: 5px;
	margin-bottom: 20px;

`

export const UserCenterContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`
export const UserDescription = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	width: 60%;
	color: white;
	font-size: 14px;
	font-weight: 300;
	overflow: hidden;

	user-select: none;
	-moz-user-select: none;
`
export const UserProfileButtonContainer = styled.div`
	height: 10vh;
	max-width: 100%;
	display: flex; 
	align-items: center;
	justify-content: center;
	border-top: 1.75px solid #2b2d2e;
`
