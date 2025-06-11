import axios from 'axios';

import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,

	USERS_REQUEST,
	USERS_SUCCESS,
	USERS_FAIL,

	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,

	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,


	ARTIST_PUBLICATIONS_REQUEST,
	ARTIST_PUBLICATIONS_SUCCESS,
	ARTIST_PUBLICATIONS_FAIL,

	ARTIST_PRODUCTS_REQUEST,
	ARTIST_PRODUCTS_SUCCESS,
	ARTIST_PRODUCTS_FAIL,

	USER_UPDATE_PROFILE_REQUEST, 
	USER_UPDATE_PROFILE_SUCCESS, 
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_RESET,

	ARTIST_DETAILS_REQUEST,
	ARTIST_DETAILS_SUCCESS, 
	ARTIST_DETAILS_FAIL,

	ANOTHER_ARTIST_DETAILS_REQUEST,
	ANOTHER_ARTIST_DETAILS_SUCCESS,
	ANOTHER_ARTIST_DETAILS_FAIL,

	ARTIST_UPDATE_DETAILS_REQUEST,
	ARTIST_UPDATE_DETAILS_SUCCESS,
	ARTIST_UPDATE_DETAILS_FAIL,

	ARTIST_FOLLOW_REQUEST,
	ARTIST_FOLLOW_SUCCESS,
	ARTIST_FOLLOW_FAIL,
	
	ARTIST_UNFOLLOW_REQUEST,
	ARTIST_UNFOLLOW_SUCCESS,
	ARTIST_UNFOLLOW_FAIL,

	ARTIST_FOLLOWERS_REQUEST,
	ARTIST_FOLLOWERS_SUCCESS,
	ARTIST_FOLLOWERS_FAIL,

	ARTIST_FOLLOWING_REQUEST,
	ARTIST_FOLLOWING_SUCCESS,
	ARTIST_FOLLOWING_FAIL,

} from '../constants/userConstants';
import { CART_CLEAR_ITEMS } from '../constants/cartConstants';

export const login = (username, password) => async (dispatch) => {

	try{
		dispatch({
			type:USER_LOGIN_REQUEST
		})

		const config = {
			headers:{
				'Content-type': 'application/json'
			}
		}

		const {data} = await axios.post(
			'/api/users/login/',
			{'user': {'email': username, 'password': password}},
			config
		)

		const safeUserData = {
			...data,
			image: data.image || null,
		};

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: safeUserData,
		});


		localStorage.setItem('userInfo', JSON.stringify(safeUserData))
	}catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo')
	dispatch({ type: USER_LOGOUT})

	localStorage.removeItem('cartItems')
	dispatch({
		type: CART_CLEAR_ITEMS,
	})
}

export const getUsers = () => async (dispatch) => {

	try{
		dispatch({
			type:USERS_REQUEST
		})

		const config = {
			headers:{
				'Content-type': 'application/json'
			}
		}

		const {data} = await axios.get(
			'/api/users/',
			config
		)

		dispatch({
			type: USERS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: USERS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}
export const register = (email, username, password) => async (dispatch) => {

	try{
		dispatch({
			type:USER_REGISTER_REQUEST
		})

		const config = {
			headers:{
				'Content-type': 'application/json'
			}
		}

		const {data} = await axios.post(
			'/api/users/register/',
			{'user': {'email': email, 'username': username, 'password': password}},
		)

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data
		})

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('userInfo', JSON.stringify(data))
	}catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getUserDetails = (id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:USER_DETAILS_REQUEST
		})
		
		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.get(
			`/api/users/artist/${id}/`,
			config
		)

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const updateUserProfile = (user) => async (dispatch, getState) => {

	try{
		dispatch({
			type:USER_UPDATE_PROFILE_REQUEST
		})
		
		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Token ${userInfo.user.token}`
			}
		}

		const {data} = await axios.put(
			`/api/users/artist/settings/update/`,
			user, 
		)

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data
		})

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

	}catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}


export const getArtistPublications = (id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_PUBLICATIONS_REQUEST
		})
		
		const {data} = await axios.get(
			`/api/users/artist/publications/${id}/`,
		)

		dispatch({
			type: ARTIST_PUBLICATIONS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_PUBLICATIONS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getArtistProducts = (id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_PRODUCTS_REQUEST
		})
		
		const {data} = await axios.get(
			`/api/users/artist/products/${id}/`,
		)

		dispatch({
			type: ARTIST_PRODUCTS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_PRODUCTS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getAnotherArtistDetails = (id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ANOTHER_ARTIST_DETAILS_REQUEST
		})
		
		const {data} = await axios.get(
			`/api/users/artist/${id}/`,
		)

		dispatch({
			type: ANOTHER_ARTIST_DETAILS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ANOTHER_ARTIST_DETAILS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getArtistDetails = (id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_DETAILS_REQUEST
		})
		
		const {data} = await axios.get(
			`/api/users/artist/${id}/`,
		)

		dispatch({
			type: ARTIST_DETAILS_SUCCESS,

			payload: data
		})

		localStorage.setItem('artistInfo', JSON.stringify(data))
	}catch (error) {
		dispatch({
			type: ARTIST_DETAILS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const updateArtistDetails = (artist) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_UPDATE_DETAILS_REQUEST,
		})
		
		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.put(
			`/api/users/artist/update/`,
			artist,
			config
		)

		dispatch({
			type: ARTIST_UPDATE_DETAILS_SUCCESS,
			payload: data
		})

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

	}catch (error) {
		dispatch({
			type: ARTIST_UPDATE_DETAILS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const followArtist = (id, subscriber_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_FOLLOW_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.post(
			`/api/users/artist/follow/${id}/`,
			{'subscriber_id': subscriber_id},
			config
		)

		dispatch({
			type: ARTIST_FOLLOW_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_FOLLOW_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const unfollowArtist = (id, subscriber_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_UNFOLLOW_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.put(
			`/api/users/artist/unfollow/${id}/`,
			{'subscriber_id': subscriber_id},
			config
		)

		dispatch({
			type: ARTIST_UNFOLLOW_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_UNFOLLOW_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getFollowers = (user_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_FOLLOWERS_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.get(
			`/api/users/artist/followers/${user_id}`,
			config
		)

		dispatch({
			type: ARTIST_FOLLOWERS_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_FOLLOWERS_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getFollowing = (user_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_FOLLOWING_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.user.token}`
			}
		}

		const {data} = await axios.get(
			`/api/users/artist/following/${user_id}`,
		)

		dispatch({
			type: ARTIST_FOLLOWING_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_FOLLOWING_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}

export const getIsFollowArtist = (id, subscriber_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:ARTIST_FOLLOW_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers:{
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.post(
			`/api/users/isfollow/${id}/`,
			{'subscriber_id': subscriber_id},
			config
		)

		dispatch({
			type: ARTIST_FOLLOW_SUCCESS,
			payload: data
		})

	}catch (error) {
		dispatch({
			type: ARTIST_FOLLOW_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail
				: error.message,
		})
	}
}
