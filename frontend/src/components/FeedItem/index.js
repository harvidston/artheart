import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {FeedCard, CreatorName, CommentInput,  ArtistImg, CreatorContainer,  CreatorImg, CreatorImgContainer, CreatorInfoContainer, CreatorBtn, FeedItemTitle, FeedItemImgContainer, FeedItemImg, FeedItemActions, ActionItem, ArtWorkPrice, ArtistContainer, ArtistImgContainer, ArtistCommentContainer, LikesAmount, CommentsAmount} from './FeedItemStyles';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FeedItem = ({publication, artist}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [comment, setComment] = useState('')

	const buttonHandler = (e) => {
		e.preventDefault()
		navigate(`/artist/${publication.artist_id}`)
	}
	const publicationDetailsHandler = (e) => {
		e.preventDefault()
		navigate(`/publication/${publication.id}`)
	}
	return(
		<FeedCard>
			<CreatorContainer>
				<CreatorImgContainer>
					<CreatorImg src = {publication.artist_image}/>
				</CreatorImgContainer>

				<CreatorInfoContainer>
					<CreatorBtn onClick = {buttonHandler}>@{publication.artist}</CreatorBtn>
					<CreatorName>
						{publication.artist_first_name}&nbsp;{publication.artist_last_name}
					</CreatorName>
				</CreatorInfoContainer>
			</CreatorContainer>

			<FeedItemTitle>{publication.name}</FeedItemTitle>
			<FeedItemImgContainer>
				<FeedItemImg onClick={publicationDetailsHandler} src = {publication.image}/>
			</FeedItemImgContainer>

			<FeedItemActions>
				<ActionItem activestyle = 'true'><AiFillHeart/><LikesAmount>{publication.likes_amount}</LikesAmount></ActionItem>
				<ActionItem><AiFillMessage/><CommentsAmount>{publication.reviews_amount}</CommentsAmount></ActionItem>
			</FeedItemActions>

			<ArtWorkPrice></ArtWorkPrice>

			<ArtistContainer>
				<ArtistImgContainer>
					<ArtistImg src = {artist.image}/>
				</ArtistImgContainer>
				<ArtistCommentContainer>
					<CommentInput
						type='text'
						placeholder = 'Write your comment'
						value = {comment}
						onChange = {(e)=> setComment(e.target.value)}
					/>
				</ArtistCommentContainer>
			</ArtistContainer>
		</FeedCard>
	)
}
export default FeedItem 
