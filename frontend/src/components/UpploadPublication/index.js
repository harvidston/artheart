import React, { useState, useEffect, useRef} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {MainContainer, CategoryList, CategoryName, CategoriesContainerLeft, NameDescriptionContainer,  CategoryListItem, SelectCategoryButton, CategoriesWidget,  ImageInputWidget, SelectedImageItem, DeleteItemButton,  ImageIcon, SelectedImageName, SelectedImageContainer, ImageInputFields, Icon, Title, HighlightPart, ImageInputButton, LeftContentContainer, RightContentContainer, UpploadContainer,   ImageInput,  PageTitle,  Input,  Form, SaveButton, SaveContainer,  InputTitle,  TextInput}  from './UpploadStyles';
import Categories from '../../components/Categories';
import {BsImageFill} from 'react-icons/bs';
import {RiDeleteBinFill} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';


import { getPublicationDetails, createPublication, updatePublication } from '../../actions/publicationActions';
import { PUBLICATION_UPDATE_RESET} from '../../constants/publicationConstants';
import {RiDeleteBin7Fill} from 'react-icons/ri';


const UpploadPublication = ({match, history}) => {
	const inputRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false)
	const [selescted, setSelected] = useState()

	const {id} = useParams();
	const publicationId = {id};
	const dispatch = useDispatch()

	const [categories, setCategories] = useState([])	

	const [publication_name, setPublicationName] = useState('')
	const [category, setCategory] = useState([])
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const publicationDetails = useSelector(state => state.publicationDetails)
	const { loading: loadingDetails, succes: successDetails, publication: publicationItem} = publicationDetails

	const publicationUpdate = useSelector(state => state.publicationUpdate)
	const { loading: loadingUpdate, succes: successUpdate, error: errorUpdate} = publicationUpdate

	useEffect(()=>{
		if(!userInfo){
			navigate('/authorization')
		}
		async function fetchCategories(){
			const {data} = await axios.get('/api/categories/')
			setCategories(data)
		}
		fetchCategories()

	}, [])


	const submitHandler = (e) => {
		e.preventDefault()
		//dispatch(createPublication(publication_name, image, description, category))
		setImage(null)
		//if (publicationCreate){
			//navigate('/authorization');
		//}
	}
	const handleChange = (e) =>{
		if (e.target.files) {
			setImage(e.target.files[0].name)
		}

	}
	const updateHandler = (e) => {
		e.preventDefault()
		setCategory('Sculpture')
		dispatch(updatePublication({
			'id': id,
			'name': publication_name,
			'category': category,
			'description': description
		}))
			dispatch({type: PUBLICATION_UPDATE_RESET})
			navigate('/home')

	}
	const uploadImageHandler = async (e) => {
		const file = e.target.files[0]
		file.isUploading = true;
		const formData = new FormData()

		formData.append('image',file)
		formData.append('publication_id', id)

		try{
			const config ={
				headers: {
					'Content-type': 'multipart/form-data'
				}
			};
			const {data} = await axios.post('/api/publications/upload/', formData, config)

			setImage(data)
			setImage(e.target.files[0].name)
			file.isUploading = false;

		}catch (error){
			setImage(image.filter(file => file.name !== image))	
		}
	}
	const deleteImageHandler = () => {
		setImage(null)
		inputRef.current.value = null;

	}


		const fetchCategoriesHandler = async ()=>{
			const {data} = await axios.get('/api/categories/')
			setCategories(data)
		}
	const selectedCategory = 'Sculpture'

	console.log(category)
	
	return(
		<MainContainer>
			<PageTitle>Create Publication</PageTitle>
			{loadingUpdate && <Spinner/>}
			{errorUpdate && <Message>{errorUpdate}</Message>}

			<Form onSubmit={updateHandler}>
			<UpploadContainer>
				<LeftContentContainer>
		<CategoriesContainerLeft>
					<SelectCategoryButton>
						{selescted ? selescted: "Select Category"}
					</SelectCategoryButton>
						<CategoryList>
							{categories.map((category)=>
								<CategoryListItem activestyle='true' onClick= {() =>  setSelected(category.name) & setCategory(category.id) } >
									<CategoryName>{category.name}</CategoryName>
								</CategoryListItem>)}
						</CategoryList>

		</CategoriesContainerLeft>
		<NameDescriptionContainer>

					<InputTitle>Publication Name</InputTitle>
					<Input
						type='text'
						required
						placeholder = 'Enter publication name'
						value = {publication_name}
						onChange = {(e)=> setPublicationName(e.target.value)}
					/>
					<InputTitle>Description</InputTitle>
					<TextInput
						type='text'
						required
						placeholder = 'Enter description'
						value = {description}
						onChange = {(e)=> setDescription(e.target.value)}
					/>
		</NameDescriptionContainer>

		
				</LeftContentContainer>
				<RightContentContainer>
					<ImageInputWidget>
						<ImageInputFields>
							<ImageInputButton>
								<Icon><BsImageFill/></Icon>
								<Title>Drop your image here or </Title><HighlightPart>click to browse</HighlightPart>
								<ImageInput
									type='file'
									accept='image/*'
									required
									name={image}
									onChange={uploadImageHandler}
									ref={inputRef}
								/>
							</ImageInputButton>
							<SelectedImageContainer>
								{image  && 
								<SelectedImageItem>
									<ImageIcon><BsImageFill/></ImageIcon><SelectedImageName>{image}</SelectedImageName>
									<DeleteItemButton onClick = {()=> deleteImageHandler(image)}><RiDeleteBin7Fill/></DeleteItemButton> 
								</SelectedImageItem>}
							</SelectedImageContainer>
						</ImageInputFields>
					</ImageInputWidget>
					<SaveContainer>
						<SaveButton type='submit' >Create publication</SaveButton>
					</SaveContainer>
				</RightContentContainer>
			</UpploadContainer>
			</Form>
		</MainContainer>
	)
}
export default UpploadPublication;
