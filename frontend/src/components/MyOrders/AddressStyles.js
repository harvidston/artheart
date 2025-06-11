import styled, { css, keyframes } from "styled-components";

export const AddressContainer = styled.div`
	display: flex;
	height: 20vh;
	width: 55%;
	background: transparent;	
	border-radius: 30px;
	border: 1px solid #000;
	margin-left: 10vw;
	margin-top: 2vh;
	border: 1px solid #2b2d2e;
	transition: 0.5s;
	&:hover{
		box-shadow: 0px 0px 20px 1px #000;
	}
`

export const AddressTitle = styled.div`
	margin-left: 1vw;
	margin-top: 1vh;
	color: #899c88;
	font-size: 15px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;
`
