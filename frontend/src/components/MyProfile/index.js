import React, { useState, useEffect} from 'react';
import {InfoContainer, InfoLeftContainer, Input, InputBioTitle, UploadIcon, ImageInput, InfoRightContainer, InputUsernameTitle, Form, SaveButton, SaveContainer, BioInput, NameInput, PersonalContainer, UserImgContainer, InputsContainer, EmailInput, InputTitle, FirstNameInput, LeftContainer, RightContainer, UserNameContainer, ContentTitle, PersonalTitle, AddressTitle, AddressContainer} from './MyProfileStyles';
import axios from 'axios';
import { getUserDetails, updateUserProfile} from '../../actions/userActions';
import { getArtistDetails, updateArtistDetails} from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';
import { USER_UPDATE_PROFILE_RESET} from '../../constants/userConstants';


import {BsUpload} from 'react-icons/bs';
import {FaUpload} from 'react-icons/fa';

const MyProfile = () => {

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [artist_image, setArtistImage] = useState('')
	const [description, setDescription] = useState('')

	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	const location = useLocation();

	const navigate = useNavigate();
	const dispatch = useDispatch()


	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const userUpdateProfile = useSelector(state => state.userUpdateProfile)
	const {success} = userUpdateProfile

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	useEffect(()=>{
		if (!userInfo) {
			navigate('/authorization');
		}else{
			dispatch(getArtistDetails(userInfo.user.username))
		}
	}, [userInfo])

	useEffect(() => {

		dispatch({type: USER_UPDATE_PROFILE_RESET})
		if (!successArtistDetails){
			dispatch(getArtistDetails(userInfo.user.username))
		}else{
			setArtistImage(artistItem[0].image)
			setDescription(artistItem[0].description)
			setFirstName(artistItem[0].first_name)
			setLastName(artistItem[0].last_name)
			setEmail(artistItem[0].email)
			setUsername(artistItem[0].username)
		}
	}, [dispatch, navigate, userInfo,  success, successArtistDetails, artistItem])

	const submitHandler = (e) => {
		e.preventDefault()
		if  (password !== confirmPassword){
			setMessage('')
		}else{
			dispatch(updateUserProfile({
				'id': artistItem[0].id,
				'first_name': first_name,
				'last_name': last_name,
				'email': email,
				'username': username,
				'description': description,
				'password': password
			}))

		}
	}
	const updateDescriptionHandler = (e) => {
		e.preventDefault()
			dispatch(updateArtistDetails({
				'description': description,
			}))
	}

	const uploadHandler = async (e) => {
		const file = e.target.files[0]
		file.isUploading = true;
		const formData = new FormData()

		formData.append('first_name',first_name)
		formData.append('artist_id', artistItem[0].id)

		try{
			const config ={
				headers: {
					'Content-type': 'multipart/form-data'
				}
			};
			const {data} = await axios.post('/api/users/artist/settings/update/', formData, config)


			setFirstName(data)
			file.isUploading = false;
		}catch (error){
			setArtistImage(artist_image.filter(file => file.name !== artist_image))	
		}
	}

	const uploadImageHandler = async (e) => {
		const file = e.target.files[0]
		file.isUploading = true;
		const formData = new FormData()

		formData.append('image',file)
		formData.append('artist_id', artistItem[0].id)

		try{
			const config ={
				headers: {
					'Content-type': 'multipart/form-data'
				}
			};
			const {data} = await axios.post('/api/users/artist/upload/', formData, config)

			setArtistImage(data)
			setArtistImage(e.target.files[0].name)
			file.isUploading = false;

		}catch (error){
			setArtistImage(artist_image.filter(file => file.name !== artist_image))	
		}
	}

	return (
			<>
			<ContentTitle>My Profile</ContentTitle>
			<InfoContainer>
				<InfoLeftContainer>
					<UserImgContainer src={artist_image}/>
							<UploadIcon><FaUpload/></UploadIcon>
								<ImageInput
									type='file'
									accept='image/*'
									equired
									name={artist_image}
									onChange={uploadImageHandler}
								/>

				</InfoLeftContainer>
				<InfoRightContainer>
					<UserNameContainer>{first_name + ' ' + last_name}</UserNameContainer>
				</InfoRightContainer>
			</InfoContainer>
		<Form onSubmit = {uploadHandler}>
			<PersonalContainer>
				<PersonalTitle>Personal Information</PersonalTitle>
				<InputsContainer>
				<LeftContainer>
					<InputTitle>First Name</InputTitle>
					<Input
						type='text'
						placeholder = 'Type your first name'

						value = {first_name}
						onChange = {(e)=> setFirstName(e.target.value)}
					/>
						<InputTitle>Username</InputTitle>
						<Input
							type='text'
							placeholder = 'Type your username'
							value = {username}
							onChange = {(e)=> setUsername(e.target.value)}
						/>

					<InputTitle>Email Address</InputTitle>
					<Input
						type='text'
						placeholder = 'Type your email'
						value = {email}
						onChange = {(e)=> setEmail(e.target.value)}
					/>
				</LeftContainer>
				<RightContainer>

					<InputTitle>Last Name</InputTitle>
					<Input
						type='text'
						placeholder = 'Type your last name'
						value = {last_name}
						onChange = {(e)=> setLastName(e.target.value)}
					/>

					<InputBioTitle>Bio</InputBioTitle>
					<BioInput
						type='text'
						placeholder = 'Type your bio'
						value = {description}
						onChange = {(e)=> setDescription(e.target.value)}
					/>

				</RightContainer>
				</InputsContainer>
			</PersonalContainer>


			<SaveContainer>
				<SaveButton type='submit' >Save changes</SaveButton>
			</SaveContainer>
		</Form>
		</>
	)
}
export default MyProfile;
