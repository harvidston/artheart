import {

	PRODUCT_CREATE_REQUEST, 
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL, 
	PRODUCT_CREATE_RESET, 

	PRODUCT_UPDATE_REQUEST, 
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL, 
	PRODUCT_UPDATE_RESET, 

	PRODUCT_DETAILS_REQUEST, 
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL, 
	PRODUCT_DETAILS_RESET, 

	PRODUCT_FEED_REQUEST,
	PRODUCT_FEED_SUCCESS,
	PRODUCT_FEED_FAIL,

} from '../constants/productConstants';

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return {loading: true, }

		case PRODUCT_CREATE_SUCCESS:
			return {loading: false, success: true, product: action.payload}

		case PRODUCT_CREATE_FAIL:
			return {loading: false, error: action.payload}

		case PRODUCT_CREATE_RESET:
			return{}

		default: 
			return state
	}
}

export const productUpdateReducer = (state = {product: {}}, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return {loading: true }

		case PRODUCT_UPDATE_SUCCESS:
			return {loading: false, success: true, product: action.payload}

		case PRODUCT_UPDATE_FAIL:
			return {loading: false, error: action.payload}

		case PRODUCT_UPDATE_RESET:
			return{}

		default: 
			return state
	}
}

export const productDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {loading: true }

		case PRODUCT_DETAILS_SUCCESS:
			return {loading: false, success: true, product: action.payload}

		case PRODUCT_DETAILS_FAIL:
			return {loading: false, error: action.payload}

		case PRODUCT_DETAILS_RESET:
			return{}

		default: 
			return state
	}
}

export const productFeedReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_FEED_REQUEST:
			return {loading: true }

		case PRODUCT_FEED_SUCCESS:
			return {loading: false, success: true, product: action.payload}

		case PRODUCT_FEED_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}
