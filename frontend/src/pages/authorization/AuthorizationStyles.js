import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


export const MainContainer = styled.div`
	height: 100vh;
	background: #0F0E0E;	
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LoginForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 85vh;
	width: 30vw;
	border-radius: 20px;
	background: transparent;
	//border: 1px solid #55595c;
	border: 1px solid #2b2d2e;
	filter: drop-shadow(80px 80px 15px #000);
`
export const TextContainer = styled.div`
	position: absolute;
	height: 20vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	//background: yellow;
	user-select: none;
	-moz-user-select: none;
`
export const InputsRegistrationContainer = styled.div`
	position: absolute;
	height: 40vh;
	top: 25vh;
	width: 100%;
	text-align: center;
	//background: green;

`
export const InputsContainer = styled.div`
	position: absolute;
	bottom: 0px;
	height: 53vh;
	width: 100%;
	text-align: center;

`
export const Symbol = styled.div`
	color: #899c88;
	margin-left: 2px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;
`
export const EmailInput = styled.input`
	height: 5vh;
	//height: 60px;
	width: 50%;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 300;
	color: white;
	align-items: center;
	padding-left: 20px;	
	padding-right: 20px;
	cursor: text;
	outline: none;
	background: transparent;
	border: 1px solid #55595c;
	margin-bottom: 2vh;
	box-shadow: 5px 7px 5px 5px #171616;


	&:focus{
		border: 1px solid transparent;
		box-shadow: 0px 0px 15px 5px #171616;
	}
`
export const PasswordInput = styled.input`
	height: 5vh;
	//height: 60px;
	width: 50%;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 300;
	color: #c4c4c4;
	color: white;
	align-items: center;
	padding-left: 20px;	
	padding-right: 20px;
	cursor: text;
	outline: none;
	background: transparent;
	border: 1px solid #55595c;
	margin-bottom: 2vh;
	box-shadow: 5px 7px 5px 5px #171616;

	&:focus{
		border: 1px solid transparent;
		box-shadow: 0px 0px 15px 5px #171616;
	}
`
export const Text = styled.div`
	position: absolute;
	width: 100%;
	font-size: 2.5vh;
	color: white;
	font-weight: 800;

	display: flex;
	justify-content: center;
	//margin-top: 14vh;
	filter: drop-shadow(10px 10px 15px #000);
	user-select: none;
	-moz-user-select: none;
`
export const Description = styled.div`

	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
	color: white;
	//font-size: 1.3vh;
	font-size: 15px;
	font-weight: 200;
	margin-top: 7vh;
	filter: drop-shadow(10px 5px 2px #000);
	user-select: none;
	-moz-user-select: none;
`
export const InputTitle = styled.div`
	color: #c4c4c4;
	//color: white;
	font-size: 15px;
	font-weight: 300;
	margin-left: 7vw;
	margin-bottom: 10px;
	display: flex;
	user-select: none;
	-moz-user-select: none;
`
export const BackImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	opacity: 60%;
`
export const LogInBtn = styled.button`
	filter: drop-shadow(10px 5px 5px #000);
	position: relative;
	height: 5.3vh;
	height: 60px;
	width: 55%;
	background: transparent;
	font-size: 15px;
	//font-size: 1.2vh;
	font-weight: 600;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	color: white;

	//margin-left: 5.7vw;
	margin-top: 5vh;
	align-items: center;
	transition: transform 0.5s ease;
	background: #5D535C;
	opacity: 85%;

	&::after{
		
		content: '';
		position: absolute;
		border-radius: inherit;
		opacity: 50%;
		background: #5D535C;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		z-index: -1;
		transition: transform 0.7 ease;
	}
	&::before{
		content: '';
		position: absolute;
		opacity: 50%;
		background: #5D535C;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		z-index: -1;
		transition: transform 0.7 ease;

	}
	&:hover{
		transform: translate(-12px, -12px);
	}
	&:hover::after{
		transform: translate(6px, 6px);
	}
	&:hover::before{
		transform: translate(12px, 12px);
	}
`
export const LinkContainer = styled.div`
	display: flex;
	margin-top: 15px;
	align-items: center;
	justify-content: center;
`
export const LinkText = styled.div`
	color: white;
	opacity: 70%;
	font-size: 15px;
	font-weight: 300;
	display: inline-block;
	cursor: default ;
	user-select: none;
	-moz-user-select: none;
`
export const RegistrationLink = styled(Link)`
	color: lightgray;
	font-size: 15px;
	font-weight: 600;
	display: inline-block;
	text-decoration: none;
	transition: 2s;
	user-select: none;
	-moz-user-select: none;
	&:hover{
		text-decoration: underline;
	}
`
export const ButtonContainer = styled.div`
	position: absolute;
	text-align: center;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20vh;
	bottom: 0px;
	//background: red;
`
