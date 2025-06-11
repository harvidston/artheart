
import styled, { css, keyframes } from "styled-components";


export const MainContainer = styled.div`
	display: flex;

	height: 90vh;
	background: #0F0E0E;	
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`

export const SettingsContainer = styled.div`

	position: absolute;
	background: #171616;
	//background: #0F0E0E;
	//border: 1px solid #2b2d2e;
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
export const NavigationContainer = styled.div`
	max-height: 100%;
	width: 12vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	border-right: 1.75px solid #2b2d2e;
	margin-top: 50px;
	margin-bottom: 50px;

`
export const ContentContainer = styled.div`
	height: 100%;
	width: 85vw;
	display: flex;
	flex-direction: column;
	//align-items: center;
`
export const NavigationItem = styled.button`
	//margin-left: 5vh;
	margin-bottom: 10px;
	font-size: 14px;
	font-weight: 300;
	color: #c4c4c4;
	background: transparent;
	border: none;
	cursor: pointer;
	height: 70px;
	width: max-content;
	padding-left: 4vh;
	padding-right: 4vh;
	&:hover{
		background: #131212;
		border-radius: 10px;
	}
	&:focus{
		background: #131212;
		border-radius: 10px;
	}
`
export const PageTitle = styled.div`
	color: #899c88;
	font-size: 22px;
	font-weight: 600;
	margin-left: 3vw;
	margin-top: 1.5vh;

`
	





