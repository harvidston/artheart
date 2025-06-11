import React, { useState, useEffect} from 'react';
import {MainContainer, TopContainer, ArtistWorks, SwitchProductsButton, EmptyMessage, SwitchButtonContainer, SwitchPublicationsButton, FollowerRight,  FollowerImg, FollowerImgContainer, FollowerItem, ShowFollowersButton, ProductsButton, ArtworksButton, PopUpCloseButton, FollowerLastName, FollowerFirstName, PopUpFollowersTitle, FollowerUsername,  ArtistInfo,  ArtWorksWidget,  UserImg, FollowingNumber,	FollowingTitle, UserDescription, UserNameContainer, UserFullNameContainer, UserWidgetContainer, UserImgContainer, FollowersTitle, FollowersNumber, UserFollowersContainer, UserFollowingContainer, UserTopContainer, UserCenterContainer, UserBottomContainer, UserProfileButtonContainer} from './ArtistStyles'

import { getUserDetails, updateUserProfile} from '../../actions/userActions';
import ArtWorksItem from '../../components/ArtWorksItem';
import PopUpScreen from '../../components/PopUpScreen';
import ProductsList from '../../components/ProductsList';
import ProductsItem from '../../components/ProductsItem';
import ArtistProductItem from '../../components/ArtistProductItem';

import { getArtistDetails, getFollowers, getFollowing, getArtistPublications, getArtistProducts } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import Message from '../../components/Message';



const Artist = () => {
	const dispatch = useDispatch()	
	const navigate = useNavigate()
	const [artist_image, setArtistImage] = useState('')
	const [artist_bio, setArtistBio] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [followers_amount, setFollowersAmount] = useState('')
	const [following_amount, setFollowingAmount] = useState('')
	const [pop_up_active, setPopUpActive] = useState(false)
	const [isShowFollowers, setIsShowFollowers] = useState(true)
	const [isShowPublications, setIsShowPublications] = useState(true)

	const artistPublications = useSelector(state => state.artistPublications)
	const {loading: loadingArtistPublications, error: errorArtistPublications, success: successArtistPublications, publications} = artistPublications

	const artistProducts = useSelector(state => state.artistProducts)
	const {loading: loadingArtistProducts, error: errorArtistProducts, success: successArtistProducts, products} = artistProducts

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const userDetails = useSelector(state => state.userDetails)
	const {error, loading, user} = userDetails

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	const artistFollowers = useSelector(state => state.artistFollowers)
	const {error: artistFollowersError, success: artistFollowersSuccess, loading: artistFollowersLoading, followersList} = artistFollowers

	const artistFollowing = useSelector(state => state.artistFollowing)
	const {error: artistFollowingError, success: artistFollowingSuccess, loading: artistFollowingLoading, followingList} = artistFollowing

	useEffect(()=>{
		if (!userInfo ) {
			navigate('/authorization');
		}else{
			dispatch(getArtistDetails(userInfo.user.username))
			dispatch(getArtistPublications(userInfo.user.username))
			dispatch(getArtistProducts(userInfo.user.username))
			dispatch(getFollowers(userInfo.user.username))
			dispatch(getFollowing(userInfo.user.username))
		}
	}, [userInfo])
	
	useEffect(()=>{
		if (!userInfo ) {
			navigate('/authorization');
		}else{
			if (successArtistDetails){
				setFirstName(artistItem[0].first_name)
				setLastName(artistItem[0].last_name)
				setEmail(artistItem[0].email)
				setUsername(artistItem[0].username)
				setArtistImage(artistItem[0].image)
				setArtistBio(artistItem[0].description)
			}
			if (artistFollowersSuccess){
				setFollowersAmount(followersList.length)
			}
			if (artistFollowingSuccess){
				setFollowingAmount(followingList.length)
			}
		}
	}, [ artistItem, userInfo, artistFollowersSuccess, artistFollowingSuccess, publications, products, successArtistDetails])

	const publicationDetailsHandler = (publication_id) => {
		navigate(`/publication/${publication_id}`)
	}

	const navigateToProfileHandler = (artist_id) => {
		navigate(`/artist/${artist_id}`)
	}

	return (
		<MainContainer>

			<PopUpScreen active = {pop_up_active} setActive = {setPopUpActive} >
			{isShowFollowers ? (
				<>
				<TopContainer>
					<PopUpFollowersTitle>{followers_amount} Followers</PopUpFollowersTitle>
					<PopUpCloseButton onClick={()=> setPopUpActive(false)}><RxCross1/></PopUpCloseButton>
				</TopContainer>

					{followersList?.length === 0 ? (
						<>
							You have no followers
						</>
					):(
						<>
					{followersList?.map((follower) => (
						<FollowerItem onClick = {() => {navigateToProfileHandler(follower.user_id)}}>
							<FollowerImgContainer>
								<FollowerImg src={follower.image}/>
							</FollowerImgContainer>
							<FollowerRight>
								<FollowerUsername>{follower.username}</FollowerUsername>
								<FollowerFirstName>{follower.first_name}</FollowerFirstName>&nbsp;
								<FollowerLastName>{follower.last_name}</FollowerLastName>
							</FollowerRight>

						</FollowerItem>
					))}
						</>
					)}

				</>
			):(
			<>
				<TopContainer>
					<PopUpFollowersTitle>{following_amount} Following</PopUpFollowersTitle>
					<PopUpCloseButton onClick={()=> setPopUpActive(false)}><RxCross1/></PopUpCloseButton>
				</TopContainer>

					{followingList?.length === 0 ? (
						<>
							You have no following artists
						</>
					):(
						<>
					{followingList?.map((following) => (
						<FollowerItem onClick = {() => {navigateToProfileHandler(following.user_id)}}>
							<FollowerImgContainer>
								<FollowerImg src={following.image}/>
							</FollowerImgContainer>
							<FollowerRight>
								<FollowerUsername>{following.username}</FollowerUsername>
								<FollowerFirstName>{following.first_name}</FollowerFirstName>&nbsp;
								<FollowerLastName>{following.last_name}</FollowerLastName>
							</FollowerRight>
						</FollowerItem>
					))}

						</>
					)}




			</>
		)}
			</PopUpScreen>
			<ArtistInfo>
				<UserWidgetContainer>
					<UserTopContainer>
						<UserFollowersContainer onClick={()=> setPopUpActive(true) & setIsShowFollowers(true)}>

								<FollowersNumber>{followers_amount}</FollowersNumber>
								<FollowersTitle>Followers</FollowersTitle>

						</UserFollowersContainer>
						<UserImgContainer>
							<UserImg src={artist_image}/>
						</UserImgContainer>
						<UserFollowingContainer onClick={()=> setPopUpActive(true) & setIsShowFollowers(false)}>
							<FollowingNumber>{following_amount}</FollowingNumber>
							<FollowingTitle>Following</FollowingTitle>
						</UserFollowingContainer>
					</UserTopContainer>
					<UserCenterContainer>
						<UserFullNameContainer> {first_name + ' ' + last_name}</UserFullNameContainer>
						<UserNameContainer>@{username} </UserNameContainer>
					</UserCenterContainer>
					<UserBottomContainer>
						<UserDescription>{artist_bio}</UserDescription>
					</UserBottomContainer>
					<UserProfileButtonContainer>
						<SwitchButtonContainer>
							<SwitchPublicationsButton onClick={() => setIsShowPublications(true) }>Publications</SwitchPublicationsButton>
							<SwitchProductsButton onClick={() => setIsShowPublications(false)}>Products</SwitchProductsButton>
						</SwitchButtonContainer>
					</UserProfileButtonContainer>	
				</UserWidgetContainer>
			</ArtistInfo>
			<ArtistWorks>
			{ isShowPublications ? (
				<>
				<ArtWorksWidget>
					{publications?.length === 0 ? (
						<>
							<EmptyMessage>You don't have any publications yet </EmptyMessage>
						</>
					):(
						<>
						{publications?.map((publication) => (
							<ArtWorksItem key = {publication.id} publication = {publication} />
						))}
						</>
					)}
				</ArtWorksWidget>

				</>

			):(
				<>
				<ArtWorksWidget>
					{products?.length === 0 ? (
						<>
							<EmptyMessage>You don't have any products yet </EmptyMessage>
						</>
					):(
						<>
					{products?.map((product) => (
						<ProductsItem key = {product.id} product = {product} />
					))}
						</>
					)}

				</ArtWorksWidget>
				</>

			)}
			</ArtistWorks>


		</MainContainer>
	)
}
export default Artist;
