import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, artistPublicationsReducer, artistProductsReducer, artistDetailsReducer, UsersReducer, artistFollowReducer, artistUnfollowReducer, anotherArtistDetailsReducer, artistFollowersReducer, artistFollowingReducer} from './reducers/userReducers'
import { publicationCreateReducer, publicationDetailsReducer, publicationCreateReviewReducer, publicationUpdateReducer, publicationsFeedReducer} from './reducers/publicationReducers'
import { productCreateReducer, productUpdateReducer, productDetailsReducer, productFeedReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {orderCreateReducer} from './reducers/orderReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	users: UsersReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,

	artistPublications: artistPublicationsReducer,
	artistProducts: artistProductsReducer,
	artistDetails: artistDetailsReducer,
	anotherArtistDetails: anotherArtistDetailsReducer,
	artistFollow: artistFollowReducer,
	artistUnfollow: artistUnfollowReducer,
	artistFollowers: artistFollowersReducer,
	artistFollowing: artistFollowingReducer,

	publicationCreate: publicationCreateReducer,
	publicationUpdate: publicationUpdateReducer,
	publicationDetails: publicationDetailsReducer,
	publicationsFeed: publicationsFeedReducer,
	publicationCreateReview: publicationCreateReviewReducer,

	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDetails: productDetailsReducer,
	productFeed: productFeedReducer,

	cart: cartReducer,		

	orderCreate: orderCreateReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
	JSON.parse(localStorage.getItem('userInfo')) : null

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
	JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? 
	JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
	userLogin: {userInfo: userInfoFromStorage},
	cart: {
		cartItems: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
		paymentMethod: paymentMethodFromStorage,
	}
}

const middleware = [thunk]

const platform = createStore(reducer, initialState,
	composeWithDevTools(applyMiddleware(...middleware)))

export default platform
