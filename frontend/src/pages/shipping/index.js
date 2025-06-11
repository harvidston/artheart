import React, { useState, useEffect, useRef} from 'react';
import { Link, useParams } from 'react-router-dom';
import {MainContainer, ShippingContainer, WidgetContainer, SettingsContainer,CategoryList, CategoryName, CategoriesContainerLeft, NameDescriptionContainer,  CategoryListItem, SelectCategoryButton, CategoriesWidget,  ImageInputWidget, SelectedImageItem, DeleteItemButton,  ImageIcon, SelectedImageName, SelectedImageContainer, ImageInputFields, Icon, Title, HighlightPart, ImageInputButton, LeftContentContainer, RightContentContainer, UpploadContainer,   ImageInput,  PageTitle,  Input,  Form, SaveButton, SaveContainer,  InputTitle,  TextInput}  from './ShippingStyles';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import CheckOutOrderSteps from '../../components/CheckOutOrderSteps';
import { saveShippingAddress} from '../../actions/cartActions';

const ShippingScreen = ({match, history}) => {
	const inputRef = useRef(null);

	const cart = useSelector(state => state.cart)
	const {shippingAddress} = cart

	const dispatch = useDispatch()

	const [address, setAddress] = useState(shippingAddress.address)
	const [city, setCity] = useState(shippingAddress.city)
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
	const [country, setCountry] = useState(shippingAddress.country);

	const [isOpen, setIsOpen] = useState(false)
	const [selescted, setSelected] = useState()

	const {id} = useParams();
	const publicationId = {id};





	const navigate = useNavigate();

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const publicationDetails = useSelector(state => state.publicationDetails)
	const { loading: loadingDetails, succes: successDetails, publication: publicationItem} = publicationDetails

	const publicationUpdate = useSelector(state => state.publicationUpdate)
	const { loading: loadingUpdate, succes: successUpdate, error: errorUpdate} = publicationUpdate

	useEffect(()=>{

	}, [])


	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(saveShippingAddress({address, city, postalCode, country}))

		navigate('/payment')
	}
	
	return(
		<MainContainer>
			<PageTitle>Shipping Address</PageTitle>
			{loadingUpdate && <Spinner/>}
			{errorUpdate && <Message>{errorUpdate}</Message>}
			<CheckOutOrderSteps step1 step2/>



			<ShippingContainer>
			<Form onSubmit={submitHandler}>
				<WidgetContainer>
					<InputTitle>Address</InputTitle>
					<Input
						type='text'
						required
						placeholder = 'Enter address'
						value = {address ? address : ''}
						onChange = {(e)=> setAddress(e.target.value)}
					/>
					<InputTitle>City</InputTitle>
					<Input
						type='text'
						required
						placeholder = 'Enter city'
						value = {city ? city : ''}
						onChange = {(e)=> setCity(e.target.value)}
					/>
					<InputTitle>Postal Code</InputTitle>
					<Input
						type='text'
						required
						placeholder = 'Enter postal code'
						value = {postalCode ? postalCode : ''}
						onChange = {(e)=> setPostalCode(e.target.value)}
					/>
					<InputTitle>Country</InputTitle>
					<Input
						type='text'
						required
						placeholder = 'Enter country'
						value = {country ? country : ''}
						onChange = {(e)=> setCountry(e.target.value)}
					/>
					<SaveContainer>
						<SaveButton type='submit' onClick={submitHandler} >Continue</SaveButton>
					</SaveContainer>
			</WidgetContainer>
			</Form>
		</ShippingContainer>
		</MainContainer>
	)
}
export default ShippingScreen
