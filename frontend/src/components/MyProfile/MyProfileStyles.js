import styled, { css, keyframes } from "styled-components";

export const UploadIcon = styled.div`
	position: absolute;
	display: flex;
	top: 9vh;
	margin-left: 11vh;
	font-size: 20px;
	color: #131212;
`
export const ImageInput = styled.input`
	position: absolute;
	height: 5vh;
	width: 3vh;
	background: red;
	cursor: pointer;
	margin-left: 11vh;
	margin-bottom: 11vh;
	opacity: 0;
`
export const UserImgContainer2 = styled.div`
	height: 13vh;
	width: 13vh;
	background: transparent;
	border-radius: 20px;
	border: 1px solid #2b2d2e;
	display: flex;
	margin-top: 3vh;
`
export const UserImgContainer = styled.img`
	height: 13vh;
	width: 13vh;
	border-radius: 25px;
	margin-left: 12px;
	background: grey;
	object-fit: cover;
`
export const UserImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
	object-fit: cover;
`
export const Form = styled.form`

`
export const ContentTitle = styled.div`
	margin-left: 10vw;
	margin-top: 3vh;
	color: #c4c4c4;
	font-size: 20px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;
`
export const PersonalTitle = styled.div`
	margin-left: 1vw;
	margin-top: 2vh;
	color: #899c88;
	font-size: 15px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;
`

export const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	height: 15vh;
	width: 60%;
	background: transparent;	
	border: 1px solid #000;
	border-radius: 30px;
	margin-left: 10vw;
	margin-top: 2vh;
	border: 1px solid #2b2d2e;
	transition: 0.5s;
	&:hover{
		box-shadow: 0px 0px 20px 1px #000;
	}
`

export const PersonalContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 85%;
	width: 60%;
	background: transparent;	
	border: 1px solid #000;
	border-radius: 30px;
	margin-left: 10vw;
	margin-top: 2vh;
	border: 1px solid #2b2d2e;
	transition: 0.5s;
	&:hover{
		box-shadow: 0px 0px 20px 1px #000;
	}
`
export const InfoLeftContainer = styled.div`
	height: 100%;
	width: 16%;
	display: flex;
	align-items: center;
`
export const InfoRightContainer = styled.div`
	height: 100%;
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const InputsContainer = styled.div`
	display: flex;
	height: 50%;
`

export const SaveContainer = styled.div`
	display: flex;
	height: 5vh;
	width: 60%;
	background: transparent;	
	margin-left: 10vw;
	margin-top: 3vh;
	justify-content: end;
`
export const SaveButton = styled.button`

	filter: drop-shadow(10px 10px 10px #000);
	height: 65px;
	width: 7vw;
	width: max-content;
	font-size: 16px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	color: white;

	//margin-left: 5.7vw;
	align-items: center;
	transition: transform 0.5s ease;
	background: #899c88;
	opacity: 80%;
	position: relative;
	padding-left: 20px;
	padding-right: 20px;
	transition: 0.5s;
	&:hover{
		scale: 1.1;
		box-shadow: 0px 0px 20px 2px #000;
	}
`
export const LeftContainer = styled.div`
	
	height: 100%;
	width: 40%;
`
export const RightContainer = styled.div`
	height: 100%;	
	width: 60%;
`
export const InputBioTitle = styled.div`
	margin-top: 30px;
	margin-top: 2vh;
	margin-left: 50px;
	color: #c4c4c4;
	font-size: 14px;
	font-weight: 300;
`
export const InputTitle = styled.div`
	margin-top: 50px;
	margin-top: 3vh;
	margin-left: 50px;
	color: #c4c4c4;
	font-size: 14px;
	font-weight: 300;
`
export const InputUsernameTitle = styled.div`
	color: #c4c4c4;
	font-size: 14px;
	font-weight: 300;
	margin-top: 30px;
	margin-left: 50px;
	margin-bottom: 5px;
`

export const BioInput = styled.textarea`
	height: 80%;
	width: 80%;
 	margin-left: 50px;
	margin-top: 10px;

	border: none;
	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	color: white;
	outline: none;

	&:focus{
		border: none;
		border: 1px solid #2b2b2e; 
	}

`
export const Input = styled.input`
	height: 5vh;
	width: 10vw;
 	margin-left: 50px;
	margin-top: 10px;

	border: none;
	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;
	padding-right: 20px;
	padding-left: 20px;
	color: white;
	font-weight: 600;
	outline: none;

	&:focus{
		border: none;
		border: 1px solid #2b2b2e; 
	}

`

export const UserNameContainer = styled.div`
	font-size: 22px;
	margin-left: 10px;
	color: white;
	font-weight: 600;
`

