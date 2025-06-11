import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {ArtWorkCard, ArtWorkImg, ArtWorkTitle, ArtWorkCreator, ArtWorkActions, CreatorBtn, ArtWorkActionItem, LikesAmount, CommentsAmount, ArtWorkPrice} from './ArtistProductItemStyles.js';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ArtistProductItem = ({product}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	return(
		<ArtWorkCard>
			<ArtWorkImg src = {product.image}/>
			<ArtWorkTitle>{product.name}</ArtWorkTitle>
			<ArtWorkCreator><CreatorBtn>@{product.artist}</CreatorBtn></ArtWorkCreator>
			<ArtWorkActions>
				<ArtWorkActionItem activestyle = 'true'><AiFillHeart/><LikesAmount>500</LikesAmount></ArtWorkActionItem>
				<ArtWorkActionItem><AiFillMessage/><CommentsAmount>3</CommentsAmount></ArtWorkActionItem>
			</ArtWorkActions>
			<ArtWorkPrice></ArtWorkPrice>
		</ArtWorkCard>
	)
}
export default ArtistProductItem 

