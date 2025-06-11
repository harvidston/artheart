import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {CartProductCard, RemoveFromCartButtonContainer, CartProductTitleContainer, CartProductPrice, CartProductPriceContainer,  CartProductImgContainer,  CartProductTitle, CartProductImg, RemoveFromCartButton, ArtWorkCreator, ArtWorkActions, CreatorBtn, ArtWorkActionItem, LikesAmount, CommentsAmount, ArtWorkPrice} from './CartItemStyles';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import { addToCart, removeFromCart } from '../../actions/cartActions';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {RiDeleteBin7Fill} from 'react-icons/ri';

const CartItem = ({cartItem}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id))

	}

	return(
		<CartProductCard>
			<CartProductImgContainer>
				<CartProductImg src = {cartItem.image}/>
			</CartProductImgContainer>
			<CartProductTitleContainer>
				<CartProductTitle>{cartItem.name}</CartProductTitle>
			</CartProductTitleContainer>
			<CartProductPriceContainer>
				<CartProductPrice>{cartItem.price} $</CartProductPrice>
			</CartProductPriceContainer>
			<RemoveFromCartButtonContainer>
				<RemoveFromCartButton onClick= {() => removeFromCartHandler(cartItem.product)}>< RiDeleteBin7Fill/></RemoveFromCartButton>
			</RemoveFromCartButtonContainer>



		</CartProductCard>
	)
}
export default CartItem
