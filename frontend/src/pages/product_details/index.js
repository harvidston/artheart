import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainContainer, PageTitle, PageContainer, AddToCartButton, AddToCartButtonContainer, ImageContainer, PriceContainer, InfoContainer, AddToCartIcon,  By, TitleContainer, SubtitleCategory, CreatorBtn, SubtitleDescription, CreatorContainer, DescriptionContainer, CategoryContainer,  ArtImage} from './ProductDetailsStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';

import { getUserDetails} from '../../actions/userActions';

import { getArtistDetails} from '../../actions/userActions';
import { getArtistPublicatoins} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import {publicationDetails} from '../../actions/publicationActions';
import { getProductDetails } from '../../actions/productActions';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import { PUBLICATION_DETAILS_RESET} from '../../constants/publicationConstants';
import {BsFillCartPlusFill} from 'react-icons/bs';
import {BsCartPlusFill} from 'react-icons/bs';

const ProductDetails = () => {

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
	const [price, setPrice] = useState('')

	const artistPublications = useSelector(state => state.artistPublications)
	const {loading: loadingArtistPublications, error: errorArtistPublications, success: successArtistPublications, publications} = artistPublications

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const userDetails = useSelector(state => state.userDetails)
	const {error, loading, user} = userDetails

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	const productDetails = useSelector(state => state.productDetails)
	const {error: errorProductDetails, loading: loadingProductDetails, success: successProductDetails, product} = productDetails

	useEffect(()=>{
		dispatch({ type: PUBLICATION_DETAILS_RESET})
		dispatch(getProductDetails(id))
	}, [])

	useEffect(()=>{
		if(successProductDetails){
			setImage(product.image)
			setTitle(product.name)
			setCategory(product.category_name)
			setDescription(product.description)
			setUsername(product.artist)
			setReviewsAmount(product.reviews_amount)
			setLikesAmount(product.likes_amount)
			setCreatedAt(product.created_at)
			setPrice(product.price)
		}
	}, [product, successProductDetails])

	const ArtistButtonHandler = (e) => {
		e.preventDefault()
		navigate(`/artist/${product.artist_id}`)
	}
	const addToCartHandler = (e) => {
		e.preventDefault()
		navigate(`/cart/${id}`)

	}
	const timestamp = new Date(created_at).getTime()
	const Day = new Date(timestamp).getDate()
	const Month = new Date(created_at).toLocaleString('default', {month: 'long'})
	const Year = new Date(created_at).getFullYear()
	return (

		<MainContainer>
		<PageTitle>Art Details</PageTitle>
			<PageContainer>
			{loadingProductDetails && <Spinner/>}
			{errorProductDetails && <Message/>}
			<ImageContainer>
				<ArtImage src = {image} />
			</ImageContainer>

			<InfoContainer>
				<TitleContainer>{title}</TitleContainer>
				<CreatorContainer><By>by</By>&nbsp;<CreatorBtn onClick={ArtistButtonHandler}>@{username}</CreatorBtn></CreatorContainer>
				<PriceContainer><SubtitleCategory>Price:</SubtitleCategory>&nbsp;{price} $</PriceContainer>	
				<CategoryContainer><SubtitleCategory>Date:</SubtitleCategory>&nbsp;{Day} {Month} {Year}</CategoryContainer>	
				<CategoryContainer><SubtitleCategory>Category:</SubtitleCategory>&nbsp;{category}</CategoryContainer>	
				<SubtitleDescription>Description:</SubtitleDescription>
				<DescriptionContainer>{description}</DescriptionContainer>
				<AddToCartButtonContainer>
					<AddToCartButton onClick = {addToCartHandler}>ADD TO CART <AddToCartIcon><BsCartPlusFill /></AddToCartIcon> </AddToCartButton>
				</AddToCartButtonContainer>

			</InfoContainer>
			</PageContainer>
		</MainContainer>
	)
}
export default ProductDetails;
