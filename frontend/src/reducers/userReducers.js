import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,

	USERS_REQUEST,
	USERS_SUCCESS,
	USERS_FAIL,

	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
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

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {loading: true, }

		case USER_LOGIN_SUCCESS:
			return {loading: false, userInfo: action.payload}

		case USER_LOGIN_FAIL:
			return {loading: false, error: action.payload}

		case USER_LOGOUT:
			return{}

		default: 
			return state
	}
}

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {loading: true, }

		case USER_REGISTER_SUCCESS:
			return {loading: false, userInfo: action.payload}

		case USER_REGISTER_FAIL:
			return {loading: false, error: action.payload}

		case USER_LOGOUT:
			return{}

		default: 
			return state
	}
}

export const userDetailsReducer = (state = {user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true, }

		case USER_DETAILS_SUCCESS:
			return {loading: false, user: action.payload}

		case USER_DETAILS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return {loading: true, }

		case USER_UPDATE_PROFILE_SUCCESS:
			return {loading: false, success: true, userInfo: action.payload}

		case USER_UPDATE_PROFILE_FAIL:
			return {loading: false, error: action.payload}
		
		case USER_UPDATE_PROFILE_RESET: 
			return{}

		default: 
			return state
	}
}

export const artistPublicationsReducer = (state = { }, action) => {
	switch (action.type) {
		case ARTIST_PUBLICATIONS_REQUEST:
			return { loading: true, publications:[] }

		case ARTIST_PUBLICATIONS_SUCCESS:
			return {loading: false, success: true, publications: action.payload}

		case ARTIST_PUBLICATIONS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}


export const artistProductsReducer = (state = { }, action) => {
	switch (action.type) {
		case ARTIST_PRODUCTS_REQUEST:
			return { loading: true, products:[] }

		case ARTIST_PRODUCTS_SUCCESS:
			return {loading: false, success: true, products: action.payload}

		case ARTIST_PRODUCTS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}
export const artistDetailsReducer = (state = {artist: {} }, action) => {
	switch (action.type) {
		case ARTIST_DETAILS_REQUEST:
			return { ...state, loading: true, }

		case ARTIST_DETAILS_SUCCESS:
			return {...state, loading: false, success: true, artist: action.payload}

		case ARTIST_DETAILS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}
export const anotherArtistDetailsReducer = (state = {artist: {} }, action) => {
	switch (action.type) {
		case ANOTHER_ARTIST_DETAILS_REQUEST:
			return { ...state, loading: true, }

		case ANOTHER_ARTIST_DETAILS_SUCCESS:
			return {...state, loading: false, success: true, artist: action.payload}

		case ANOTHER_ARTIST_DETAILS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const UsersReducer = (state ={}, action) => {
	switch (action.type) {
		case USERS_REQUEST:
			return { loading: true}

		case USERS_SUCCESS:
			return {loading: false, success: true, usersList: action.payload }

		case USERS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const artistFollowReducer = (state = {}, action) => {
	switch (action.type) {
		case ARTIST_FOLLOW_REQUEST:
			return {loading: true, }

		case ARTIST_FOLLOW_SUCCESS:
			return {loading: false, success: true}

		case ARTIST_FOLLOW_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const artistUnfollowReducer = (state = {}, action) => {
	switch (action.type) {
		case ARTIST_UNFOLLOW_REQUEST:
			return {loading: true, }

		case ARTIST_UNFOLLOW_SUCCESS:
			return {loading: false, success: true}

		case ARTIST_UNFOLLOW_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const artistFollowersReducer = (state = {}, action) => {
	switch (action.type) {
		case ARTIST_FOLLOWERS_REQUEST:
			return {loading: true, }

		case ARTIST_FOLLOWERS_SUCCESS:
			return {loading: false, success: true, followersList: action.payload}

		case ARTIST_FOLLOWERS_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

export const artistFollowingReducer = (state = {}, action) => {
	switch (action.type) {
		case ARTIST_FOLLOWING_REQUEST:
			return {loading: true, }

		case ARTIST_FOLLOWING_SUCCESS:
			return {loading: false, success: true, followingList: action.payload}

		case ARTIST_FOLLOWING_FAIL:
			return {loading: false, error: action.payload}

		default: 
			return state
	}
}

