import React, { useState, useEffect} from 'react';
import {MainContainer, ProductButton, PublicationButton, ProductForm, CreateContainer, PublicationForm, Text, TextContainer, BackImg, PageTitle, LeftContainer, RightContainer}  from './CreatePublicationStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import {createPublication} from '../../actions/publicationActions';
import {createProduct} from '../../actions/productActions';
import { PUBLICATION_CREATE_RESET} from '../../constants/publicationConstants';
import { PRODUCT_CREATE_RESET} from '../../constants/productConstants';
import publicationImage from '../../design_media/prod4.jpg';

import productImage from '../../design_media/prod5.jpg';

function CreateMyPublication ({history, match}) {

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin
	//const publicationList = useSelector(state, => state.publicationList)
	const publicationCreate = useSelector(state => state.publicationCreate)
	const {loading: loadingCreate, error: errorCreate, success: successCreate, publication: createdPublication} = publicationCreate

	const productCreate = useSelector(state => state.productCreate)
	const {loading: loadingCreateProduct, error: errorCreateProduct, success: successCreateProduct, product: createdProduct} = productCreate

	console.log('Create', publicationCreate);

	const [publication_name, setPublicationName] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('');
	const [uploading, setUploading] = useState(false)

	const [message, setMessage] = useState('')
	const location = useLocation();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch({ type: PUBLICATION_CREATE_RESET})
		dispatch({ type: PRODUCT_CREATE_RESET})
		if (!userInfo) {
			navigate('/authorization');
		}
		if (successCreate) {
			navigate(`/publications/${createdPublication.id}/uppload`)
		}
		if (successCreateProduct) {
			navigate(`/product/${createdProduct.id}/uppload`)
		}

	}, [dispatch, navigate, userInfo, successCreate, successCreateProduct, createdPublication])

	

	const submitHandler = (e) => {
		e.preventDefault()
		//dispatch(createPublication(publication_name, image, description, category))
		setImage(null)
		if (publicationCreate){
			navigate('/authorization');
		}
	}
	const handleChange = (e) =>{
		if (e.target.files) {
			setImage(e.target.files[0].name)
		}

	}
	const uploadImageHandler = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()

		formData.append('image',file)

		try{
			const config ={
				headers: {
					'Content-type': 'multipart/form-data'
				}
			};
			//const {data} = await axios.post('/api/publications/upload/', formData, config)

			//setImage(data)

		}catch (error){
			
		}
	}

	const createPublicationHandler = () => {
		dispatch(createPublication(userInfo.user.username))
	}
	const createProductHandler = () => {
		dispatch(createProduct(userInfo.user.username))
	}

	return (
		<MainContainer>
			{loadingCreate && <Spinner/>}
			{errorCreate && <Message>{errorCreate}</Message>}

			<PageTitle>Creation Page</PageTitle>
			<CreateContainer>
				<LeftContainer>
					<PublicationForm onClick={createPublicationHandler}>
						<BackImg src ={publicationImage}/>
						<TextContainer>
							<Text>Create Publication</Text>
						</TextContainer>
					</PublicationForm>
				</LeftContainer>
				<RightContainer>
					<ProductForm onClick={createProductHandler}>
						<BackImg src ={productImage}/>
						<TextContainer>
							<Text>Create Product</Text>
						</TextContainer>
					</ProductForm>
				</RightContainer>
			</CreateContainer>
		</MainContainer>
	)
}
export default CreateMyPublication;
