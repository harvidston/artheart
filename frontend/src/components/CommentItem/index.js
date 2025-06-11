import React, { useState, useEffect} from 'react';
import {MainContainer, ReviewArtistLastName,  ReviewDate, ReviewDateContainer, ReviewTime, ReviewArtistBio, ReviewItemTopContainer, ReviewItemBottomContainer, ReviewArtistFirstName, ReviewItem, ReviewText, ReviewArtistImg, ReviewArtistInfoRight, ReviewArtistUsername, ReviewArtistImgContainer,  ReviewsSubContainer,  ExistingReviewsContainer, ExistingTitle, ReviewsContainer, Form,  SaveButton, CommentInput, ArtistImg, ArtistContainer, ArtistImgContainer, ArtistCommentContainer, PageTitle, PageContainer, ImageContainer, InfoContainer, By, TitleContainer, SubtitleCategory, CreatorBtn, SubtitleDescription, CreatorContainer, DescriptionContainer, CategoryContainer,  ArtImage} from './CommentItemStyles';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CommentItem = ({review}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const timestamp = new Date(review.created_at).getTime()
	const Minutes = new Date(timestamp).getMinutes()
	const Hours = new Date(review.created_at).getHours()
	const Day = new Date(timestamp).getDate()
	const Month = new Date(review.created_at).toLocaleString('default', {month: 'long'})
	const Year = new Date(review.created_at).getFullYear()

	const navigateToProfileHandler = (artist_id) => {
		navigate(`/artist/${artist_id}`)
	}

	return(
						<ReviewItem >
							<ReviewItemTopContainer onClick = {() => {navigateToProfileHandler(review.artist)}}>
								<ReviewArtistImgContainer>
									<ReviewArtistImg src={review.artist_image}/>
								</ReviewArtistImgContainer>
								<ReviewArtistInfoRight>
									<ReviewArtistUsername>{review.artist_username}</ReviewArtistUsername>
									<ReviewArtistBio>
										<ReviewArtistFirstName>{review.artist_first_name}</ReviewArtistFirstName>&nbsp;
										<ReviewArtistLastName>{review.artist_last_name}</ReviewArtistLastName>

									</ReviewArtistBio>

								</ReviewArtistInfoRight>
							</ReviewItemTopContainer>
							<ReviewItemBottomContainer>
								<ReviewText>{review.comment}</ReviewText>
							</ReviewItemBottomContainer>
							<ReviewDateContainer>
								<ReviewTime>{Hours}:{Minutes}</ReviewTime>
								<ReviewDate>  {Day} {Month} {Year}</ReviewDate>
							</ReviewDateContainer>
						</ReviewItem>

	)
}
export default CommentItem
