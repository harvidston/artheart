import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainContainer, SubtotalPrice, OrderInfo, ShippingContainer, PaymentContainer, Title, Address, SubtotalItemsAmount, CheckOutButton, CartButton, EmptyMessage, SubName, SubPrice,SubtotalPriceContainer, EmptyCartIcon,  SubtotalItemsAmountContainer, SubtotalInfoContainer, CheckOutButtonContainer, PageTitle, SubtotalWidget, CartContainer, SubtotalContainer, ProductsContainer,} from './PlaceOrderStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import SearchComponent from '../../components/SearchComponent';
import SearchProductsComponent from '../../components/SearchProductsComponent';
import ProductsList from '../../components/ProductsList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import CheckOutOrderSteps from '../../components/CheckOutOrderSteps';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import CartItem from '../../components/CartItem';
import {BsFillCartXFill} from 'react-icons/bs';
import {createOrder} from '../../actions/orderActions';
import { ORDER_CREATE_RESET } from '../../constants/orderConstants';

const PlaceOrderScreen = () => {

	const orderCreate = useSelector(state => state.orderCreate)
	const {order, error, success} = orderCreate

	const dispatch = useDispatch()	
	const navigate = useNavigate()

	const {id} = useParams();

	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [country, setCountry] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');

	const cart = useSelector(state => state.cart)

	cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + Number(item.price) , 0).toFixed(2)
	cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10 ).toFixed(2)
	cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
	cart.totalPrice = Number(Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	if(!cart.paymentMethod){
		navigate('/payment')
	}

	useEffect(() => {
		setAddress(cart.shippingAddress.address)
		setCity(cart.shippingAddress.city)
		setPostalCode(cart.shippingAddress.postalCode)
		setCountry(cart.shippingAddress.country)
		setPaymentMethod(cart.paymentMethod)

		if(success){
			dispatch({type: ORDER_CREATE_RESET})
		}


		

	}, [dispatch, success, id])



	const placeOrderHandler = () => {

		dispatch(createOrder({
			orderItems: cart.cartItems,
			payment_method: cart.paymentMethod,
			tax_price: cart.taxPrice,
			total_price: cart.totalPrice,
			shipping_price: cart.shippingPrice,
			shipping_address: cart.shippingAddress,
			items_price: cart.itemsPrice,

		},userInfo.user.username  ))

		navigate(`/catalog`)
	}


	return (
		<MainContainer>
			<PageTitle>Place Order</PageTitle>
			<CheckOutOrderSteps step1 step2 step3 step4/>
			<CartContainer>
				{cart.cartItems.length === 0 ? (
					<>
						<ProductsContainer>
								<EmptyMessage>Your shopping cart is empty <EmptyCartIcon> <BsFillCartXFill/> </EmptyCartIcon></EmptyMessage>
						</ProductsContainer>
						<SubtotalContainer>
							<SubtotalWidget>

								<SubtotalInfoContainer>
									<SubtotalItemsAmountContainer>
										ORDER SUMMARY	
									</SubtotalItemsAmountContainer>
									<SubtotalPriceContainer>
										<SubtotalPrice>
											{cart.cartItems.reduce((acc, item) => acc + Number(item.price) , 0).toFixed(2)} $

										</SubtotalPrice>

									</SubtotalPriceContainer>
								</SubtotalInfoContainer>
								<CheckOutButtonContainer>
									<CheckOutButton disabled={cart.cartItems.length === 0} >Proceed to Checkout</CheckOutButton>


								</CheckOutButtonContainer>

							</SubtotalWidget>

						</SubtotalContainer>

					</>
				):(
					<>
						<OrderInfo>
							<ShippingContainer>
								<Title>SHIPPING</Title>
								<Address>Address: {address}, {city}, {country}</Address>
							</ShippingContainer>
							<PaymentContainer>
								<Title>PAYMENT METHOD</Title>
								<Address>Method: {paymentMethod}</Address>

							</PaymentContainer>
							<ProductsContainer>
								<Title>ORDER ITEMS</Title>
								{cart.cartItems?.map((cartItem) => (
									<CartItem key = {cartItem.id} cartItem = {cartItem} />
								))}
							</ProductsContainer>
						</OrderInfo>
						<SubtotalContainer>
							<SubtotalWidget>
								<SubtotalInfoContainer>
									<SubtotalItemsAmountContainer>
										ORDER SUMMARY	
									</SubtotalItemsAmountContainer>
									<SubtotalPriceContainer>
										<SubtotalPrice>
											<SubName>Items</SubName><SubPrice>{cart.cartItems.reduce((acc, item) => acc + Number(item.price) , 0).toFixed(2)} $</SubPrice>
										</SubtotalPrice>
										<SubtotalPrice>
											<SubName>Shipping</SubName><SubPrice>{cart.shippingPrice} $</SubPrice>
										</SubtotalPrice>
										<SubtotalPrice>
											<SubName>Tax</SubName><SubPrice>{cart.taxPrice} $</SubPrice>
										</SubtotalPrice>
										<SubtotalPrice>
											<SubName>Total</SubName><SubPrice>{cart.totalPrice} $</SubPrice>
										</SubtotalPrice>
									</SubtotalPriceContainer>
								</SubtotalInfoContainer>
								<CheckOutButtonContainer>
									<CheckOutButton disabled={cart.cartItems.length === 0} onClick= {placeOrderHandler }>Place Order</CheckOutButton>

								</CheckOutButtonContainer>
							</SubtotalWidget>
						</SubtotalContainer>
					</>
				)}


			</CartContainer>
		</MainContainer>
	)
}
export default PlaceOrderScreen
