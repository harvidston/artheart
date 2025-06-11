import axios from 'axios';

import {
	PRODUCT_CREATE_REQUEST, 
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL, 

	PRODUCT_UPDATE_REQUEST, 
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL, 

	PRODUCT_DETAILS_REQUEST, 
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL, 

	PRODUCT_FEED_REQUEST,
	PRODUCT_FEED_SUCCESS,
	PRODUCT_FEED_FAIL,
} from '../constants/productConstants';

export const createProduct = (artist_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type: PRODUCT_CREATE_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.post(
			`/api/product/create/${artist_id}/`,
			config
		)

		dispatch({
			type: PRODUCT_CREATE_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PRODUCT_CREATE_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}

export const getProductDetails = (id) => async (dispatch) => {
	try{
		dispatch({ type: PRODUCT_DETAILS_REQUEST })
		const {data} = await axios.get(`/api/product/${id}`)

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response && error.response.data.detail 
			? error.response.data.detail: error.message,
		})
	}
}

export const updateProduct = (product) => async (dispatch, getState) => {

	try{
		dispatch({
			type: PRODUCT_UPDATE_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.put(
			`/api/product/update/${product.id}/`,
			product,
			config
		)

		dispatch({
			type: PRODUCT_UPDATE_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}

export const getPublicationsFeed = (artist_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type: PRODUCT_FEED_REQUEST
		})

		const {
			userLogin: {userInfo},
		} = getState()

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		const {data} = await axios.get(
			`/api/product/feed/${artist_id}`,
			config
		)

		dispatch({
			type: PRODUCT_FEED_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PRODUCT_FEED_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}
