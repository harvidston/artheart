import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


export const MainContainer = styled.div`
	height: 2600vh;
	background: #0F0E0E;	
	display: flex;
	justify-content: center;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`
export const LeftContainer = styled.div`
	height: 100%;
	width: 27vw;

	display: flex;
	justify-content: center;
`
export const MiddleContainer = styled.div`
	height: 100%;
	width: 35vw;
	padding-top: 5vh;
`
export const RightContainer = styled.div`
	height: 100%;
	width: 27vw;
`
export const UserWidgetContainer = styled.div`
	max-height: 45vh;
	width: 20vw;
	margin-top: 5vh;
	border-radius: 20px;
	background: #171616;
	background: transparent;
	background-image: linear-gradient(to left top, #000000, #060606, #0c0c0c, #111111, #151515);
	border: 1px solid #2b2d2e;
	box-shadow: 0 0 50px 1px #000;
	background: #0c0c0c;
`
export const UserTopContainer = styled.div`
	height: 40%;
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
	cursor: pointer;
	color: #c4c4c4;
	transition: 0.5s;
	&:hover{
		color: #6a8b86;
	}
`

export const FollowingNumber = styled.div`

	font-size: 20px;
	font-weight: 600;

`
export const FollowingTitle = styled.div`
	opacity: 70%;
	font-size: 14px;
	font-weight: 300;
`
export const FollowersNumber = styled.div`
	font-size: 20px;
	font-weight: 600;

`
export const FollowersTitle = styled.div`

	opacity: 70%;
	font-size: 14px;
	font-weight: 300;
`
export const UserImgContainer = styled.div`
	height: 13vh;
	width: 13vh;
	background: transparent;
	border-radius: 20px;
	border: 1px solid #2b2d2e;
	display: flex;
	margin-top: 3vh;
`
export const UserImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
	object-fit: cover;
`
export const UserFollowingContainer = styled.div`
	height: 100%;
	width: 32%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: #c4c4c4;
	transition: 0.5s;
	&:hover{
		color: #6a8b86;
	}
`
export const UserCenterContainer = styled.div`
	height: 20%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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
	color: white;
	color: #899c88;
	color: #6a8b86;
	font-size: 14px;
	font-weight: 300;
	margin-top: 5px;
	user-select: none;
	-moz-user-select: none;
`
export const UserBottomContainer = styled.div`
	height: 15%;
	max-width: 100%;
	display: flex;
	text-align: center;
	justify-content: center;
	padding-bottom: 5px;
`

export const UserDescription = styled.div`
	width: 85%;
	color: #8e8e8e;
	color: white;
	font-size: 14px;
	font-weight: 300;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1.75px solid #2b2d2e;
	user-select: none;
	-moz-user-select: none;
	
`
export const UserProfileButtonContainer = styled.div`
	height: 20%;
	max-width: 100%;
	display: flex; 
	align-items: flex-end;
	padding-right: 3vh;
	padding-left: 3vh;
`
export const ProfileButton = styled.button`

	height: 70%;
	width: 100%;
	font-size: 17px;
	font-weight: 600;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	color: white;
	align-items: center;
	background: transparent;
	border: 1px solid #2b2d2e;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 1vh;
	transition: 0.5s ;
	box-shadow: 0px 0px 10px 1px #000;

	color: white;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	user-select: none;
	-moz-user-select: none;
	&:hover{
		box-shadow: 0px 0px 30px 1px #000;
		//background: #131212;
		//color: #899c88;
	}
`

export const RightWidget = styled.div`
`

export const PopUpCloseButton = styled.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 20px;
	height: 45px;
	width: 45px;
	cursor: pointer;
	background: transparent;

	font-size: 16px;
	color: white;
	border: none;
	border: 1px solid #2b2d2e; 
	border-radius: 12px;
	transition: 0.5s;
	&:hover{
		background: #899c88;
		background: #6a8b86;
	}

`
export const FollowerImgContainer = styled.div`
	height: 60px;
	width: 60px;
`

export const FollowerImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const FollowerRight = styled.div`
	text-align: center;
	height: 100%;
	width: 250px;
`
export const FollowerItem = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	width: 330px;
	margin-bottom: 5px;
	border-radius: 10px;
	border: none;
	border: 1px solid #2b2d2e; 
	background: transparent;
	cursor: pointer;
	text-align: center;

	transition: all 0.5s;

	&:hover{
		background: #171616;
	}

`


export const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90px;
	width: 100%;
`
export const FollowerUsername = styled.div`
	color: #899c88;
	color: #6a8b86;
	font-size: 18px;
	font-weight: 300;
	margin-top: 15px;
`

export const FollowerFirstName = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 700;
	display: inline-block;
`
export const FollowerLastName = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 700;
	display: inline-block;
`
export const PopUpFollowersTitle = styled.div`
	color: #899c88;
	color: #6a8b86;
	font-size: 22px;
	font-weight: 700;
	margin-left: 25px;

`
