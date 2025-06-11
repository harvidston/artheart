import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

export const AddToCartIcon = styled.div`
	font-size: 24px;
	color: white;
	margin-left: 10px;
`
export const MainContainer = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`

export const ImageContainer = styled.div`
	display: flex;
	height: 70vh;
	max-width: 110vh;
	break-inside: avoid;	
	padding-right: 4vh;
	padding-left: 4vh;
	padding-top: 4vh;
	padding-bottom: 4vh;
	transition: 0.5s;
	border: 1px solid #2b2d2e;
	border-radius: 10px;
	background: #161515;

	&:hover{
		box-shadow: 0 0 20px 10px #000;

	}

`
export const PageContainer = styled.div`
	height: 89vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`
export const PageTitle = styled.div`
	height: 30px;
	width: 20vh;
	color: #899c88;
	font-size: 22px;
	font-weight: 600;
	margin-left: 4vw;
	margin-top: 1.5vh;
`
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 75vh;
	width: 35vh;
	margin-left: 3vh;
	border: 1px solid #2b2d2e;
	border-radius: 10px;
	transition: 0.5s;
	padding-left: 2vh;
	padding-right: 2vh;
	padding-top: 2vh;
	background: #161515;

	&:hover{
		box-shadow: 0 0 20px 10px #000;
	}
`
export const ArtImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	transition: 0.5s;
	&:hover{
		scale: 1.05;
	}
`
export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 26px;
	font-weight: 600;
	color: white;
`
export const By = styled.div`
	color: #c4c4c4;
	display: inline-block;
`
export const CreatorBtn = styled.button`
	width: max-content;
	height: max-content;
	font-size: 16px;
	font-weight: 300;
	color: #899C88;
	color: #6a8b86;
	cursor: pointer;
	background: transparent;
	border: none;
	&:hover{
		text-decoration: underline;
	}
`
export const AddToCartButtonContainer = styled.div`
	width: 100%;
	margin-top: 30px;
	display: flex;
	justify-content: center;
`
export const AddToCartButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	width: 100%;
	border: none;
	background: #899C88;
	border: 1px solid #2b2d2e;
	color: white;
	font-size: 16px;
	font-weight: 300;
	cursor: pointer;
	border-radius: 10px;
	transition: 0.5s;
	background: #6a8b86;
	&:hover{
		background: transparent;
	}

`

export const CreatorContainer = styled.div`
	display: inline-block;
	display: flex;
	margin-top: 20px;
`
export const DescriptionContainer = styled.div`
	display: flex;
	height: fit-content;
	border: 1px solid #2b2d2e;
	border-radius: 10px;
	padding-top: 1vh;
	padding-bottom: 1vh;
	padding-right: 1vh;
	padding-left: 1vh;
	font-size: 18px;
	font-weight: 300;
	color: white;

`
export const SubtitleCategory = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 300;
`
export const SubtitleDescription = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 300;
	margin-top: 2vh;
	margin-bottom: 10px;

`
export const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 26px;
	font-weight: 600;
	color: white;
	color: #c4c4c4;
	color: #6a8b86;
	margin-top: 2vh;
`
export const CategoryContainer = styled.div`
	display: flex;
	font-size: 18px;
	font-weight: 600;
	color: white;
	color: #c4c4c4;
	margin-top: 2vh;
`
