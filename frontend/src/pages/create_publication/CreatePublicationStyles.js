import styled, { css, keyframes } from "styled-components";


export const TextContainer = styled.div`
	position: absolute;
	height: 65vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	-moz-user-select: none;
`
export const Text = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	font-size: 36px;
	font-weight: 800;
	justify-content: center;
	filter: drop-shadow(15px 15px 7px #000);
	user-select: none;
	-moz-user-select: none;
`
export const PublicationForm = styled.form`
	position: relative;
	display: flex;
	border: 1px solid #2b2d2e;
	box-shadow: 0 0 80px 10px #000;
	height: 65vh;
	width: 65vh;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	//background: transparent;
	opacity: 70%;
	color: #ccc2c2;
	transition: 0.5s;
	&:hover{
		scale: 1.1;
		opacity:90%;
		color: white;
	}
`
export const ProductForm = styled.form`
	position: relative;
	display: flex;
	border: 1px solid #2b2d2e;
	box-shadow: 0 0 80px 10px #000;
	height: 65vh;
	width: 65vh;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	//background: transparent;
	opacity: 70%;
	color: #c4c4c4;
	color: #ccc2c2;
	transition: 0.5s;
	&:hover{
		scale: 1.1;
		opacity:90%;
		color: white;
	}
`

export const BackImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 30px;

`
export const LeftContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 100%;
	width: 50%;
	background: transparent;
	//margin-right: 15vh;
	padding-right: 3vh;
`
export const RightContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	height: 100%;	
	width: 50%;
	background: transparent;
	padding-left: 3vh;
`
export const MainContainer = styled.div`
	display: flex;
	height: 90vh;
	background: #0F0E0E;	
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`

export const CreateContainer = styled.div`
	position: absolute;
	background: #171616;
	border-radius: 30px;
	height: 81vh;
	width: 96%;
	bottom: 4vh;
	left: 2%;
	display: flex;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`
export const PageTitle = styled.div`
	color: #899c88;
	font-size: 22px;
	font-weight: 600;
	margin-left: 3vw;
	margin-top: 1.5vh;

`

