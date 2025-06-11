import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

export const ReviewArtistUsername = styled.div`
	color: #899c88;
	color: #6a8b86;
	font-size: 18px;
	font-weight: 300;
`

export const ReviewText = styled.div`
	width: 100%;
	font-size: 18px;
	font-weight: 300;
	color: white;
	margin-top: 10px;
	text-align: start;
`
export const ReviewArtistFirstName = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 700;
	display: inline-block;
`
export const ReviewArtistLastName = styled.div`
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 700;
	display: inline-block;
`
export const ReviewArtistImgContainer = styled.div`
	height: 60px;
	width: 60px;
`

export const ReviewArtistImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const ReviewArtistInfoRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 60px;

	width: 250px;
`
export const ReviewArtistBio = styled.div`
	width: 100%;
`
export const ReviewDateContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
	border-top: 1px solid #2b2d2e;
	padding-top: 10px;



`
export const ReviewTime = styled.div`
	color: #c4c4c4;
	font-size: 16px;
	font-weight: 300;
`
export const ReviewDate = styled.div`
	color: #c4c4c4;
	font-size: 16px;
	font-weight: 300;
`

export const ReviewItemTopContainer = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
	cursor: pointer;

	&:hover{
	}

	
`
export const ReviewItemBottomContainer = styled.div`
	width: 100%;
	
`
export const ReviewItem = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 330px;
	margin-bottom: 5px;
	border-radius: 10px;
	border: none;
	border: 1px solid #2b2d2e; 
	background: transparent;
	cursor: default;
	text-align: center;

	transition: all 0.5s;
	padding: 10px;

	&:hover{
		border: 1px solid #6a8b86;
	}

`

export const ReviewsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: transparent;

	
`
export const ReviewsSubContainer = styled.div`
	width: 70%;

`
export const ExistingReviewsContainer = styled.div`
	width: 100%;

`

export const ExistingTitle = styled.div`
	height: 50px;
	font-size: 20px;
	font-weight: 600;
	color: white;

	
`

export const Form = styled.form`
`
export const SaveButton = styled.button`

	height: 80px;
	width: 40%;
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
export const ArtistCommentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 100%;
`
export const CommentInput = styled.input`
	height: 80px;
	width: 100%;

	border: 1px solid #2b2b2e; 
	background: transparent;
	border-radius: 15px;

	padding-right: 20px;
	padding-left: 20px;

	font-size: 18px;
	color: white;
	font-weight: 300;
	outline: none;

	&:focus{
		border: 1px solid #2b2b2e; 
	}
`
export const ArtistContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 140px;
	width: 95%;
	border-top: 1px solid #2b2d2e;
`
export const ArtistImgContainer = styled.div`
	width: 80px;
	height: 80px;
`
export const ArtistImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	border: 1px solid #2b2d2e;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
`
export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
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
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
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
	width: 30vh;
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
	text-align: start;
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
	cursor: pointer;
	background: transparent;
	border: none;
	&:hover{
		text-decoration: underline;
	}
`
export const CreatorContainer = styled.div`
	display: inline-block;
	display: flex;
	justify-content: start;
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
export const CategoryContainer = styled.div`
	display: flex;
	font-size: 18px;
	font-weight: 600;
	color: white;
	color: #c4c4c4;
	margin-top: 2vh;
`
