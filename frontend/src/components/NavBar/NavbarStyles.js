import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


export const LoginUserImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 65px;
`
export const LoginUserImg = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 10px;
	border: 1px solid #2b2d2e;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;


`
export const LoginUserInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	height: 100%;
	width: 160px;
	text-align: center;
	font-size: 16px;
	font-weight: 300;
	color: #6a8b86;
`
export const LoginUserWidget = styled.div`
	height: 65px; 
`

export const LoginUserDropdown = styled.button`
	display: flex;
	width: 260px;
	max-width: 330px;

	align-items: center;
	justify-content: space-between;

	background: #171616;
	text-decoration: none;
	border-radius: 15px;
	height: 100%;
	color: #899C88;

	overflow: hidden;
	cursor: pointer;
	margin-bottom: 10px;
	user-select: none;
	-moz-user-select: none;
	border: none;	
	font-size: 18px;
	padding-right: 10px;

	transition: 0.5s;
	box-shadow: 0 0 30px 1px #000;
	border: 1px solid #2b2d2e;
	background: transparent;
	&:hover{
		box-shadow: 0 0 50px 1px #000;
	}
`
export const DropdownList = styled.div`

	position: relative;
	width: 255px;
	background: #171616;
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 15px;
	transition: 0.2s linear;
	//padding: 7px 0;
	padding-top: 7px;
	z-index: 99;
	border: 1px solid #2b2d2e;
	background: transparent;
`
export const DropDownLink = styled(Link)`
	text-decoration: none;
`
export const DropDownItem = styled.button`

	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 240px;
	border: none;
	border-radius: 10px;

	cursor: pointer;

	transition: 0.5s;
	font-size: 16px;
	color: white;

	background: #171616;
	background: transparent;
	margin-bottom: 7px;
	&:hover{
		background: #6a8b86;
	}
`

export const ItemIcon = styled.div`
	display: flex;
	justify-content: end;
	width: 35%;
	font-size: 18px;

`
export const ItemTitle = styled.div`
	width: 60%;
	display: flex;
	justify-content: start;

`
export const NavigationBar = styled.nav`
	height: 10vh;
	background: #171616;
	//background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const NavigationLogo = styled.div`
	display: flex;
`



export const NavigationMenu = styled.div`
	place-items: center;
`
export const AuthorizationWidgetContainer = styled.div`
	position: absolute;
	height: 60px;
	display: flex;
	right: 5vw; margin-top: 10px;
`
export const AuthorizationWidget = styled(NavLink)`
	display: flex;
	height: 100%;
	width: 200px;

	background: #171616;
	text-decoration: none;
	border-radius: 15px;
	box-shadow: 0 0 30px 5px #000;
	border: 1px solid #2b2d2e;

	align-items: center;
	text-align: center;
	justify-content: center;
	justify-content: space-between;
	overflow: hidden;

	cursor: pointer;
	user-select: none;
	-moz-user-select: none;

	transition: 0.5s;

	&:hover{

	}
`
export const WidgetIcon = styled.div`
	display: flex;
	justify-content: end;
	width: 40%;
	color: #F0EEED;
	color: #899c88;
	opacity: 80%;
	font-size: 16px;
	margin-right: 10px;
`
export const WidgetText = styled.div`
	display: flex;
	width: 60%;
	justify-content: start;
	color: #c4c4c4;
	font-size: 16px;
`
export const MenuContainer = styled.div`
	position: relative;
	margin-top: 10px;
	background: #171616;
	display: flex;
	justify-content: center;
	width: 430px;
	border-radius: 30px;
	transition: 0.2s;
	box-shadow: 0 0 30px 3px #000;
	border: 1px solid #2b2d2e;

	&:hover{
		box-shadow: 0 0 45px 5px #000;
	}
`
export const MenuItem = styled(NavLink)`
	position: relative;
	margin: 20px 25px;
	font-size: 37px;
	width: 35px;
	cursor: pointer;
	color: #F0EEED;
	color: #c4c4c4;
	//filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.7));
	//opacity: 80%;
	//transition-timing-function: cubic-bezier(0.7, 0.98, 0, -0.02);
	transition: 0.5s;
	&:hover{
		//color: #ABC4AA;
		//transition: all 0.3s ease-in-out;
		//filter: drop-shadow(5px 12px 5px rgba(0,0,0,0.9));
		//transform: translateX(0.5px) translateY(0.5px);
		//opacity: 100%;
		scale: 1.1;
	}
	&.active {
		//color: #ABC4AA;
		//transition: all 0.3s ease-in-out;
		//filter: drop-shadow(5px 12px 5px rgba(0,0,0,0.9));
		//transform: translateX(0.5px) translateY(0.5px);
		opacity: 100%;
		color: #7d9787;
		color: #6a8b86;
  }
`

export const Space = styled.div`
	margin: 0 30px;
`
export const AddPublicationBtn = styled(NavLink)`
	display: flex;
	position: absolute;
	border-radius: 27px;
	height: 70px;
	width: 70px;
	color: #F0EEED;
	background: #899c88;
	//background: #473F46;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	top: 40px;
	border: 8px solid #000000;
	cursor: pointer;
	transition: 0.5s;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	//border: 1px solid #2b2d2e;
	&:hover{
		//scale: 1.1;
	}
`
