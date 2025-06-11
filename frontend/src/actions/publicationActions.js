import axios from 'axios';

import {
	PUBLICATION_CREATE_REQUEST,
	PUBLICATION_CREATE_SUCCESS,
	PUBLICATION_CREATE_FAIL,


	PUBLICATION_UPDATE_REQUEST,
	PUBLICATION_UPDATE_SUCCESS,
	PUBLICATION_UPDATE_FAIL,

	PUBLICATION_DETAILS_REQUEST,
	PUBLICATION_DETAILS_SUCCESS,
	PUBLICATION_DETAILS_FAIL,

	PUBLICATIONS_FEED_REQUEST,
	PUBLICATIONS_FEED_SUCCESS,
	PUBLICATIONS_FEED_FAIL,

	PUBLICATION_CREATE_REVIEW_REQUEST,
	PUBLICATION_CREATE_REVIEW_SUCCESS,
	PUBLICATION_CREATE_REVIEW_FAIL,
	PUBLICATION_CREATE_REVIEW_RESET,

} from '../constants/publicationConstants';

export const createPublication = (artist_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:PUBLICATION_CREATE_REQUEST
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
			`/api/publications/create/${artist_id}/`,
			config
		)

		dispatch({
			type: PUBLICATION_CREATE_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PUBLICATION_CREATE_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}

export const getPublicationDetails = (id) => async (dispatch) => {
	try{
		dispatch({ type: PUBLICATION_DETAILS_REQUEST })
		const {data} = await axios.get(`/api/publications/${id}`)

		dispatch({
			type: PUBLICATION_DETAILS_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: PUBLICATION_DETAILS_FAIL,
			payload: error.response && error.response.data.detail 
			? error.response.data.detail: error.message,
		})
	}
}

export const updatePublication = (publication) => async (dispatch, getState) => {

	try{
		dispatch({
			type:PUBLICATION_UPDATE_REQUEST
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
			`/api/publications/update/${publication.id}/`,
			publication,
			config
		)

		dispatch({
			type: PUBLICATION_UPDATE_SUCCESS,
			payload: data,
		})

		dispatch({
			type: PUBLICATION_DETAILS_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PUBLICATION_UPDATE_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}

export const getPublicationsFeed = (user_id) => async (dispatch, getState) => {

	try{
		dispatch({
			type:PUBLICATIONS_FEED_REQUEST
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
			`/api/publications/feed/${user_id}`,
			config
		)

		dispatch({
			type: PUBLICATIONS_FEED_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PUBLICATIONS_FEED_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}

export const createPublicationReview = (publicatoin_id, review) => async (dispatch, getState) => {

	try{
		dispatch({
			type:PUBLICATION_CREATE_REVIEW_REQUEST
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
			`/api/publications/create/review/${publicatoin_id}/`,
			review,
			config
		)

		dispatch({
			type: PUBLICATION_CREATE_REVIEW_SUCCESS,
			payload: data,
		})

	}catch (error) {
		dispatch({
			type: PUBLICATION_CREATE_REVIEW_FAIL,
			payload: error.response && error.response.data.detail
				? error.response.data.detail: error.message,
		})
	}
}
