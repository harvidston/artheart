
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {MainContainer, TextContainer, SeparateContainer, ButtonContainer, InputsContainer, BackImg, InputsRegistrationContainer, LogInBtn, LoginForm, LinkText, Symbol, RegistrationLink, Description, Text, InputTitle, NameInput, LinkContainer, PasswordInput, EmailInput} from './AuthorizationStyles';
import img from './img.jpg';
import {login, register} from '../../actions/userActions';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';

function Authorization ({ history}) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	const [isRegistration, setIsRegistration] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const dispatch = useDispatch()

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const userLogin = useSelector(state => state.userLogin)
	const userRegister = useSelector(state => state.userRegister)

	const {error, loading, userInfo} = userLogin

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(username, password))
	}

	const submitRegisterHandler = (e) => {
		e.preventDefault()
		dispatch(register(email, username, password))
	}
	return (

				<LoginForm onSubmit={submitRegisterHandler}>
					<BackImg src ={img}/>
					<TextContainer>
						<Text>Welcome! Registration page!</Text>
						<Description>Enter your details to create account:</Description>
					</TextContainer>
						<InputsRegistrationContainer>
							<InputTitle>Email<Symbol>*</Symbol></InputTitle>
				<EmailInput
				type='text'
				placeholder = 'Type your email'
				value = {email}
				onChange = {(e)=> setEmail(e.target.value)}
				/>
							<InputTitle>Username<Symbol>*</Symbol></InputTitle>
				<EmailInput 
				type='text'
				placeholder = 'Type your username'

				value = {username}
				onChange = {(e)=> setUsername(e.target.value)}
				/>

							<InputTitle>Password<Symbol>*</Symbol></InputTitle>
				<PasswordInput
				type='password' 
				placeholder = 'Enter your password'
				value = {password}
				onChange = {(e)=> setPassword(e.target.value)}
				/>
							<InputTitle>Confirm Password<Symbol>*</Symbol></InputTitle>
				<PasswordInput 
				type='password' 
				placeholder = 'Repeat your password'
				value = {confirmPassword}
				onChange = {(e)=> setConfirmPassword(e.target.value)}
				/>

						</InputsRegistrationContainer>
						<ButtonContainer>
							<LogInBtn type='submit' >Create account</LogInBtn>
							<LinkContainer><LinkText>Already have an account?</LinkText>&nbsp;<RegistrationLink onClick={() => setIsRegistration(false)}>Log In</RegistrationLink></LinkContainer>
						</ButtonContainer>
				</LoginForm>
	)
}
export default Authorization;

