import React, { useState, useEffect, useRef} from 'react';
import {Form, Button, Col} from 'react-bootstrap'

import { Link, useParams } from 'react-router-dom';
import {MainContainer, RadioButton, ShippingContainer, WidgetContainer, SettingsContainer,CategoryList, CategoryName, CategoriesContainerLeft, NameDescriptionContainer,  CategoryListItem, SelectCategoryButton, CategoriesWidget,  ImageInputWidget, SelectedImageItem, DeleteItemButton,  ImageIcon, SelectedImageName, SelectedImageContainer, ImageInputFields, Icon, Title, HighlightPart, ImageInputButton, LeftContentContainer, RightContentContainer, UpploadContainer,   ImageInput,  PageTitle,  Input, SaveButton, SaveContainer,  InputTitle,  TextInput}  from './PaymentStyles';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import CheckOutOrderSteps from '../../components/CheckOutOrderSteps';
import { savePaymentMethod } from '../../actions/cartActions';

const PaymentScreen = ({match, history}) => {
	const inputRef = useRef(null);

	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [country, setCountry] = useState('');

	const [isOpen, setIsOpen] = useState(false)
	const [paymentMethod, setPaymentMethod] = useState('YandexMoney')

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const cart = useSelector(state => state.cart)
	const { loading: loadingUpdate, succes: successUpdate, error: errorUpdate} = cart

	useEffect(()=>{

	}, [])


	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		navigate('/placeorder')
	}
	
	return(
		<MainContainer>
			<PageTitle>Payment Method</PageTitle>
			{loadingUpdate && <Spinner/>}
			{errorUpdate && <Message>{errorUpdate}</Message>}
			<CheckOutOrderSteps step1 step2 step3/>
		
			<ShippingContainer>
			<Form onSubmit={submitHandler}>
				<WidgetContainer>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
					<Col>
					<Form.Check 
						type = 'radio'
						label = 'Yandex money or Credit Card'
						id = 'yandex'
						name= 'paymentMethod'
						checked
						onChange={(e) => setPaymentMethod(e.target.value)}
						style={{ color: 'white', fontSize : 20, marginBottom: 300 }}

					>
					</Form.Check>
					</Col>
				</Form.Group>

					<SaveContainer>
						<SaveButton type='submit' onClick={submitHandler} >Continue</SaveButton>
					</SaveContainer>
			</WidgetContainer>
			</Form>
		</ShippingContainer>
		</MainContainer>
	)
}
export default PaymentScreen

