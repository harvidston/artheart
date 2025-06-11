import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainContainer, LoginArtistCommentFieldContainer, ReviewArtistLastName, EmptyMessage, ReviewDate, ReviewDateContainer, ReviewArtistBio, ReviewItemTopContainer, ReviewItemBottomContainer, ReviewArtistFirstName, ReviewItem, ReviewText, ReviewArtistImg, ReviewArtistInfoRight, ReviewArtistUsername, ReviewArtistImgContainer,  ReviewsSubContainer,  ExistingReviewsContainer, ExistingTitle, ReviewsContainer, Form,  SaveButton, CommentInput, ArtistImg, ArtistContainer, ArtistImgContainer, ArtistCommentContainer, PageTitle, PageContainer, ImageContainer, InfoContainer, By, TitleContainer, SubtitleCategory, CreatorBtn, SubtitleDescription, CreatorContainer, DescriptionContainer, CategoryContainer,  ArtImage} from './PublicationDetailsStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';

import { getUserDetails} from '../../actions/userActions';

import { getArtistDetails} from '../../actions/userActions';
import { getArtistPublications} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import {publicationDetails} from '../../actions/publicationActions';
import { getPublicationDetails, createPublicationReview } from '../../actions/publicationActions';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import CommentItem from '../../components/CommentItem';
import { PUBLICATION_DETAILS_RESET} from '../../constants/publicationConstants';
import { PUBLICATION_CREATE_REVIEW_RESET} from '../../constants/publicationConstants';
import {BsFillSendFill} from 'react-icons/bs';
import {IoSend} from 'react-icons/io5';
import {BsFillArrowDownSquareFill} from 'react-icons/bs';
import {FaCommentAlt} from 'react-icons/fa';

const PublicationDetails = () => {
	const dispatch = useDispatch()	
	const navigate = useNavigate()
	const {id} = useParams();
	const [image, setImage] = useState('')
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [username, setUsername] = useState('')
	const [reviews_amount, setReviewsAmount] = useState('')
	const [likes_amount, setLikesAmount] = useState('')
	const [created_at, setCreatedAt] = useState('')
	const [email, setEmail] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [comment, setComment] = useState('')
	const [artist_image, setArtistImage] = useState('')
	const [artist_id, setArtistId] = useState('')
	const [length, setLength] = useState('')

	const [review_day,  setReviewDay] = useState('')
	const [review_month, setReviewMonth] = useState('')
	const [review_year, setReviewYear] = useState('')

	const artistPublications = useSelector(state => state.artistPublications)
	const {loading: loadingArtistPublications, error: errorArtistPublications, success: successArtistPublications, publications} = artistPublications

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const userDetails = useSelector(state => state.userDetails)
	const {error, loading, user} = userDetails

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	const publicationDetails = useSelector(state => state.publicationDetails)
	const {error: errorPublicationDetails, loading: loadingPublicationDetails, success: successPublicationDetails, publication} = publicationDetails

	const publicationCreateReview = useSelector(state => state.publicationCreateReview)
	const {error: errorPublicationCreateReview, loading: loadingPublicationCreateReview, success: successPublicatoinCreateReview} = publicationCreateReview

	useEffect(()=>{
		if (!userInfo ) {
			navigate('/authorization');
		}else{
		dispatch({ type: PUBLICATION_DETAILS_RESET})
		dispatch(getPublicationDetails(id))
		dispatch(getArtistDetails(userInfo.user.username))
		}
	}, [userInfo])

	useEffect(()=>{
		if(successPublicationDetails){
			setImage(publication.image)
			setTitle(publication.name)
			setCategory(publication.category_name)
			setDescription(publication.description)
			setUsername(publication.artist)
			setReviewsAmount(publication.reviews_amount)
			setLikesAmount(publication.likes_amount)
			setCreatedAt(publication.created_at)
			setLength(publication.reviews.length)
		}
		if (successArtistDetails){
			setArtistImage(artistItem[0].image)
			setArtistId(artistItem[0].id)
		}
		if (successPublicatoinCreateReview){
			setComment('')
			dispatch({type: PUBLICATION_CREATE_REVIEW_RESET})
			dispatch(getPublicationDetails(id))
		}

	}, [publication, successPublicatoinCreateReview, successArtistDetails, successPublicationDetails])

	const ArtistButtonHandler = (e) => {
		e.preventDefault()
		navigate(`/artist/${publication.artist_id}`)
	}

	const CreatePublicationReviewHandler = (e) => {
		e.preventDefault()
		dispatch(createPublicationReview(id, {comment, artist_id }))
	}
	const navigateToProfileHandler = (artist_id) => {
		navigate(`/artist/${artist_id}`)
	}
	const timestamp = new Date(created_at).getTime()
	const Day = new Date(timestamp).getDate()
	const Month = new Date(created_at).toLocaleString('default', {month: 'long'})
	const Year = new Date(created_at).getFullYear()

	return (

		<MainContainer>
		<PageTitle>Art Details</PageTitle>
			<PageContainer>
			{loadingPublicationDetails && <Spinner/>}
			{errorPublicationDetails && <Message/>}
			<ReviewsContainer>
				<ReviewsSubContainer>
					<ExistingTitle>REVIEWS</ExistingTitle>	
					<ExistingReviewsContainer>
						{length === 0 && <EmptyMessage>This publication has no reviews. <br/> Be the first to comment<FaCommentAlt/></EmptyMessage>}
						{publication?.reviews?.map((review) => ( 
							<>
								<CommentItem key={review.id} review={review}/>
		
							</>	
						))}
					</ExistingReviewsContainer>
				</ReviewsSubContainer>
				{userInfo ? (

				<LoginArtistCommentFieldContainer>
					{loadingPublicationCreateReview && <Spinner/>}
					{successPublicatoinCreateReview && <Message>Review sent successfully</Message>}
					{errorPublicationCreateReview && <Message> {errorPublicationCreateReview}</Message>}
					<ArtistImgContainer>
						<ArtistImg src = {artist_image}/>
					</ArtistImgContainer>
					<ArtistCommentContainer>
						<Form onSubmit={CreatePublicationReviewHandler}>
							<CommentInput 
								type='text'
								disabled= {loadingPublicationCreateReview}
								placeholder = 'Write your comment'
								value = {comment}
								onChange = {(e)=> setComment(e.target.value)}
							/>
							<SaveButton type='submit' ><IoSend/></SaveButton>
						</Form>
					</ArtistCommentContainer>
				</LoginArtistCommentFieldContainer>
				):(
					<>
						Please Login to write a review
					</>
				)}
			</ReviewsContainer>

			<ImageContainer>
				<ArtImage src = {image} />
			</ImageContainer>

			<InfoContainer>
				<TitleContainer>{title}</TitleContainer>
				<CreatorContainer><By>by</By>&nbsp;<CreatorBtn  onClick={ArtistButtonHandler}>@{username}</CreatorBtn></CreatorContainer>
				<CategoryContainer><SubtitleCategory>Date:</SubtitleCategory>&nbsp;{Day} {Month} {Year}</CategoryContainer>	
				<CategoryContainer><SubtitleCategory>Category:</SubtitleCategory>&nbsp;{category}</CategoryContainer>	
				<SubtitleDescription>Description:</SubtitleDescription>
				<DescriptionContainer>{description}</DescriptionContainer>

			</InfoContainer>


			</PageContainer>

		</MainContainer>
	)
}
export default PublicationDetails;
