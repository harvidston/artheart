import {

	PUBLICATION_CREATE_REQUEST, 
	PUBLICATION_CREATE_SUCCESS,
	PUBLICATION_CREATE_FAIL, 
	PUBLICATION_CREATE_RESET, 


	PUBLICATION_UPDATE_REQUEST, 
	PUBLICATION_UPDATE_SUCCESS,
	PUBLICATION_UPDATE_FAIL, 
	PUBLICATION_UPDATE_RESET, 

	PUBLICATION_DETAILS_REQUEST, 
	PUBLICATION_DETAILS_SUCCESS,
	PUBLICATION_DETAILS_FAIL, 
	PUBLICATION_DETAILS_RESET, 

	PUBLICATIONS_FEED_REQUEST,
	PUBLICATIONS_FEED_SUCCESS,
	PUBLICATIONS_FEED_FAIL,

	PUBLICATION_CREATE_REVIEW_REQUEST,
	PUBLICATION_CREATE_REVIEW_SUCCESS,
	PUBLICATION_CREATE_REVIEW_FAIL,
	PUBLICATION_CREATE_REVIEW_RESET,


} from '../constants/publicationConstants';

export const publicationCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PUBLICATION_CREATE_REQUEST:
			return {loading: true, }

		case PUBLICATION_CREATE_SUCCESS:
			return {loading: false, success: true, publication: action.payload}

		case PUBLICATION_CREATE_FAIL:
			return {loading: false, error: action.payload}

		case PUBLICATION_CREATE_RESET:
			return{}

		default: 
			return state
	}
}

export const publicationUpdateReducer = (state = {publication: {}}, action) => {
	switch (action.type) {
		case PUBLICATION_UPDATE_REQUEST:
			return {loading: true }

		case PUBLICATION_UPDATE_SUCCESS:
			return {loading: false, success: true, publication: action.payload}

		case PUBLICATION_UPDATE_FAIL:
			return {loading: false, error: action.payload}

		case PUBLICATION_UPDATE_RESET:
			return{}

		default: 
			return state
	}
}

export const publicationDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case PUBLICATION_DETAILS_REQUEST:
			return {loading: true }

		case PUBLICATION_DETAILS_SUCCESS:
			return {loading: false, success: true, publication: action.payload}

		case PUBLICATION_DETAILS_FAIL:
			return {loading: false, error: action.payload}

		case PUBLICATION_DETAILS_RESET:
			return{}

		default: 
			return state
	}
}

export const publicationsFeedReducer = (state = {}, action) => {
	switch (action.type) {
		case PUBLICATIONS_FEED_REQUEST:
			return {loading: true }

		case PUBLICATIONS_FEED_SUCCESS:
			return {loading: false, success: true, publications: action.payload}

		case PUBLICATIONS_FEED_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const publicationCreateReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case PUBLICATION_CREATE_REVIEW_REQUEST:
			return {loading: true }

		case PUBLICATION_CREATE_REVIEW_SUCCESS:
			return {loading: false, success: true}

		case PUBLICATION_CREATE_REVIEW_FAIL:
			return {loading: false, error: action.payload}

		case PUBLICATION_CREATE_REVIEW_RESET:
			return{}

		default: 
			return state
	}
}
