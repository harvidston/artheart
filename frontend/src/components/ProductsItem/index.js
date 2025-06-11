import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {ArtWorkCard, ArtWorkImg, ArtWorkTitle, ArtWorkCreator, ArtWorkActions, CreatorBtn, ArtWorkActionItem, LikesAmount, CommentsAmount, ArtWorkPrice} from './ProductsItemStyles';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsItem = ({product}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const buttonHandler = (e) => {
		e.preventDefault()
		navigate(`/artist/${product.artist_id}`)
	}
	const publicationDetailsHandler = (e) => {
		e.preventDefault()
		navigate(`/product/${product.id}`)
	}
	return(
		<ArtWorkCard>
			<ArtWorkImg onClick={publicationDetailsHandler} src = {product.image}/>
			<ArtWorkTitle>{product.name}</ArtWorkTitle>
			<ArtWorkCreator><CreatorBtn onClick = {buttonHandler}>@{product.artist}</CreatorBtn></ArtWorkCreator>
			<ArtWorkActions>
				<ArtWorkActionItem activestyle = 'true'><AiFillHeart/><LikesAmount>{product.likes_amount}</LikesAmount></ArtWorkActionItem>
			</ArtWorkActions>
			<ArtWorkPrice>{product.price}$</ArtWorkPrice>

		</ArtWorkCard>
	)
}
export default ProductsItem 
