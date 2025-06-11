import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainContainer, SubtotalPrice, SubtotalItemsAmount, CheckOutButton, CartButton, EmptyMessage, SubtotalPriceContainer, EmptyCartIcon,  SubtotalItemsAmountContainer, SubtotalInfoContainer, CheckOutButtonContainer, PageTitle, SubtotalWidget, CartContainer, SubtotalContainer, ProductsContainer,} from './CartStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import SearchComponent from '../../components/SearchComponent';
import SearchProductsComponent from '../../components/SearchProductsComponent';
import ProductsList from '../../components/ProductsList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';

import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import CartItem from '../../components/CartItem';
import {BsFillCartXFill} from 'react-icons/bs';

const Cart = () => {
	const dispatch = useDispatch()	
	const navigate = useNavigate()

	const {id} = useParams();

	const cart = useSelector(state => state.cart)
	const {cartItems} = cart

	useEffect(() => {
		if(id){
			dispatch(addToCart(id))
		}
	}, [dispatch, id])



	const checkOutButtonHandler = () => {
		navigate(`/shipping`)
	}


	return (
		<MainContainer>
			<PageTitle>Shopping Cart</PageTitle>
			<CartContainer>
				{cartItems.length === 0 ? (
					<>
						<ProductsContainer>
								<EmptyMessage>Your shopping cart is empty <EmptyCartIcon> <BsFillCartXFill/> </EmptyCartIcon></EmptyMessage>
						</ProductsContainer>
						<SubtotalContainer>
							<SubtotalWidget>

								<SubtotalInfoContainer>
									<SubtotalItemsAmountContainer>
										SUBTOTAL ({cartItems.length})  ITEMS	
									</SubtotalItemsAmountContainer>
									<SubtotalPriceContainer>
										<SubtotalPrice>
											{cartItems.reduce((acc, item) => acc + Number(item.price) , 0).toFixed(2)} $

										</SubtotalPrice>

									</SubtotalPriceContainer>
								</SubtotalInfoContainer>
								<CheckOutButtonContainer>
									<CheckOutButton disabled={cartItems.length === 0} >Proceed to Checkout</CheckOutButton>


								</CheckOutButtonContainer>

							</SubtotalWidget>

						</SubtotalContainer>

					</>
				):(
					<>

						<ProductsContainer>
							{cartItems?.map((cartItem) => (
								<CartItem key = {cartItem.id} cartItem = {cartItem} />
							))}
						</ProductsContainer>
						<SubtotalContainer>
							<SubtotalWidget>
								<SubtotalInfoContainer>
									<SubtotalItemsAmountContainer>
										SUBTOTAL ({cartItems.length})  ITEMS	
									</SubtotalItemsAmountContainer>
									<SubtotalPriceContainer>
										<SubtotalPrice>
											{cartItems.reduce((acc, item) => acc + Number(item.price) , 0).toFixed(2)} $
										</SubtotalPrice>
									</SubtotalPriceContainer>
								</SubtotalInfoContainer>
								<CheckOutButtonContainer>
									<CheckOutButton disabled={cartItems.length === 0} onClick= {checkOutButtonHandler }>Proceed to Checkout</CheckOutButton>

								</CheckOutButtonContainer>
							</SubtotalWidget>
						</SubtotalContainer>
					</>
				)}


			</CartContainer>
		</MainContainer>
	)
}
export default Cart
