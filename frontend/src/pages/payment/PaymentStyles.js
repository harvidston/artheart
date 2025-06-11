import styled, { css, keyframes } from "styled-components";

export const RadioButton = styled.button`
	height: 50px;
	width: 50px;
`
export const LeftContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	max-height: 100%;
	width: 50%;
	justify-content: center;
	margin-left: 5vh;
	margin-right: 5vh;
	margin-top: 5vh;
	margin-bottom: 5vh;
	border-radius: 30px;
	border: 1px solid #2b2d2e;
	transition: 0.5s;
	background: transparent;
	&:hover{
		box-shadow: 0px 0px 20px 1px #000;
	}

`
export const CategoriesContainerLeft = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 90%;
	width: 30%;
	border-right: 1px solid #2b2d2e;
	margin-top: 3vh;
	background: transparent;
`
export const NameDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	//justify-content: center;
	height: 100%;
	width: 80%;
	background: transparent;
`
export const Title = styled.div`
	font-size: 15px;
	font-weight: 300;
	color: #c4c4c4;
	user-select: none;
	-moz-user-select: none;
`
export const HighlightPart = styled.div`
	font-size: 15px;
	font-weight: 300;
	color: #899c88;
	user-select: none;
	-moz-user-select: none;
`
export const ImageInputWidget = styled.div`
	position: relative;
	display: flex;
	height: 80%;
	width: 80%;
	border-radius: 20px;
	//transition: 0.5s;
	&:hover{
		//box-shadow: 0px 0px 20px 1px #000;
	}
`
export const ImageInputFields = styled.div`
	height: 100%;
	width: 100%;
`
export const SelectedImageContainer = styled.div`
	position: absolute;
	display: flex;
	height: 70px;
	width: 70%;
	margin-top: 49vh;
	border-radius: 10px;
	align-items: center;
`
export const DeleteItemButton = styled.button`
	position: absolute;
	right: 0;
	height: 45px;
	width: 50px;
	font-size: 24px;
	color: #131212;
	cursor: pointer;
	align-items: center;
	text-align: center;
	justify-content: center;
	background: transparent;
	background: #c4c4c4;
	border-radius: 13px;
	border: none;
	transition: 0.5s;
	margin-right: 4px;
	padding-top: 5px;
	&:hover{
		color: white;
		color: #899c88;
		scale: 1.2;
	}
`
export const ImageIcon = styled.div`
	color: #131212;
	font-size: 22px;
	margin-left: 5px;
	width: 5vh;
`
export const SelectedImageName = styled.div`
	height: 100%;
	width: 75%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #131212;
	color: white;
	font-size: 15px;
	font-weight: 300;
	overflow: hidden;
	user-select: none;

	-moz-user-select: none;

`
export const SelectedImageItem = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	height: 80%;
	width: 100%;
	border-radius: 17px;
	background: #899c88;
	color: white;
	transition: 0.3s;
	box-shadow: 0px 0px 30px 3px #000;
	animation: fadeIn 3s;
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`
export const ImageInputButton = styled.button`
	display: flex;
	position: absolute;
	height: 80%;
	width: 70%;
	background: transparent;
	border: none;
	border: 1px dashed #2b2d2e;
	border-radius: 27px;
	margin-top: 3vh;	
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transition: 0.3s;
	&:hover{
		box-shadow: 0px 0px 20px 1px #000;
	}
`
export const Icon = styled.div`
	color: #c4c4c4;
	font-size: 38px;
`
export const TextInput = styled.textarea`
	user-select: none;
	-moz-user-select: none;
	height: 40%;
	width: 75%;

	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	color: white;
	font-size: 15px;
	font-weight: 300;
	outline: none;
	margin-left: 5vh;
	&:focus{
		border: 1px solid #2b2b2e; 
	}

`
export const Input = styled.input`
	height: 7vh;
	width: 75%;

	border: none;
	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;
	padding-right: 20px;
	padding-left: 20px;
	color: white;
	font-size: 15px;
	font-weight: 300;
	outline: none;

	margin-left: 5vh;



	&:focus{
		border: none;
		border: 1px solid #2b2b2e; 
	}

`
export const InputTitle = styled.div`

	color: #c4c4c4;
	color: #899c88;
	font-size: 14px;
	font-weight: 600;
	user-select: none;
	-moz-user-select: none;

	margin-top: 5vh;
	margin-bottom: 1vh;
	margin-left: 6vh;

`

export const RightContentContainer = styled.div`
	display: flex;
	max-height: 100%;
	width: 50%;
	flex-direction: column;
	margin-left: 5vh;
	margin-right: 5vh;
	margin-top: 5vh;
	margin-bottom: 5vh;
	justify-content: center;
	align-items: center;
	text-align: center;
`
export const WidgetContainer = styled.div`
	height: 100%;
	width: 100%;
`
export const ShippingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: #171616;
	border-radius: 30px;
	height: 81vh;
	width: 100%;
	bottom: 4vh;

	background: transparent;
`
export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 30%;
	border-radius: 20px;

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

export const SaveContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 5vh;
	width: 100%;
	background: transparent;	
	margin-top: 7vh;
`
export const SaveButton = styled.button`

	height: 80px;
	width: 70%;
	background: transparent;
	font-size: 16px;
	font-weight: 600;
	border: none;
	border-radius: 20px;
	border: 1px solid #2b2d2e;
	cursor: pointer;
	color: white;
	align-items: center;
	transition: 0.5s;
	position: relative;
	box-shadow: 0px 0px 20px 1px #000;
	&:hover{
		box-shadow: 0px 0px 50px 2px #000;
		color: #899c88;
	}

`
export const InputBioTitle = styled.div`
	margin-top: 30px;
	margin-top: 2vh;
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
	width: 70%;
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

export const UserImgContainer = styled.div`
	height: 13vh;
	width: 13vh;
	border-radius: 25px;
	margin-left: 12px;
	background: grey;
`
export const UserNameContainer = styled.div`
	font-size: 22px;
	margin-left: 10px;
	color: white;
	font-weight: 600;
`

export const ImageInput = styled.input`
	position: absolute;
	height: 100%;
	width: 100%;
	background: red;
	cursor: pointer;
	opacity: 0;
`


export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	height: 90vh;
	background: #0F0E0E;	
	background: transparent;

	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`


export const SettingsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	width: 100%;

	background: transparent;
	background: purple;



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
	background: transparent;

`
export const ContentContainer = styled.div`
	height: 100%;
	width: 85vw;
	display: flex;
	flex-direction: column;
	background: transparent;
	//align-items: center;
`
export const PageTitle = styled.div`
	color: #899c88;
	font-size: 22px;
	font-weight: 600;
	margin-left: 3vw;
	margin-top: 1.5vh;
	height: 5%;
	width: 90%;

`
export const CategoriesWidget = styled.div`
`
export const SelectCategoryButton = styled.button`
	display: flex;
	width: 230px;
	height: 10%;
	font-size: 16px;
	font-weight: 600;
	background: #171616;
	border-radius: 15px;
	border:none;
	color: #899c88;

	justify-content: center;
	align-items: center;
	user-select: none;
	-moz-user-select: none;
	animation: fadeIn 5s;
	transition-timing-function: cubic-bezier(0.7, 0.98, 0, -0.02);
	margin-bottom: 10px;
	background: transparent;

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`
export const CategoryList = styled.div`
	position: relative;
	background: #171616;
	display: flex;

	height: 90%;
	width: 12vh;
	align-items: center;
	flex-direction: column;

	transition: 0.2s linear;
	padding: 5px 0;
	transition-timing-function: cubic-bezier(0.7, 0.98, 0, -0.02);
	animation: fadeIn 2s;

	border-top: 1px solid #2b2d2e;
	background: transparent;
	&:hover{
		//filter: drop-shadow(1px 1px 15px #171719);
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
`
export const CategoryListItem = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 200px;
	border: none;
	border-radius: 10px;
	color: #918c8c;
	color: #c4c4c4;
	cursor: pointer;
	font-size: 16px;

	background: transparent;

	&:hover{
		//text-shadow: 1px 10px 1.1px rgba(0,0,0,0.9);
		background: #131212;
	}

	&:focus{
		background: #131212;
	}
`
export const CategoryName = styled.div`
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;

	&:hover{
		//filter: drop-shadow(5px 10px 1.1px rgba(0,0,0,0.9));
	}
	&:focus{
		background: #131212;
	}
`
