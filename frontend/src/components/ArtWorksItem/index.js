import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {ArtWorkCard, ArtWorkImg, ArtWorkTitle, ArtWorkCreator, ArtWorkActions, CreatorBtn, ArtWorkActionItem, LikesAmount, CommentsAmount, ArtWorkPrice} from './ArtWorksItemStyles';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ArtWorksItem = ({publication}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const buttonHandler = (e) => {
		e.preventDefault()
		navigate(`/artist/${publication.artist_id}`)
	}
	const publicationDetailsHandler = (e) => {
		e.preventDefault()
		navigate(`/publication/${publication.id}`)
	}
	return(
		<ArtWorkCard>
			<ArtWorkImg onClick={publicationDetailsHandler} src = {publication.image}/>
			<ArtWorkTitle>{publication.name}</ArtWorkTitle>
			<ArtWorkCreator><CreatorBtn onClick = {buttonHandler}>@{publication.artist}</CreatorBtn></ArtWorkCreator>
			<ArtWorkActions>
				<ArtWorkActionItem activestyle = 'true'><AiFillHeart/><LikesAmount>{publication.likes_amount}</LikesAmount></ArtWorkActionItem>
				<ArtWorkActionItem><AiFillMessage/><CommentsAmount>{publication.reviews_amount}</CommentsAmount></ArtWorkActionItem>
			</ArtWorkActions>
			<ArtWorkPrice></ArtWorkPrice>
		</ArtWorkCard>
	)
}
export default ArtWorksItem 
