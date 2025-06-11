import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MainContainer, FollowButtonContainer, ArtistWorks, SwitchProductsButton, EmptyMessage, SwitchButtonContainer, FollowButton, UnfollowButton, SwitchPublicationsButton, ProductsButton, ArtworksButton,  ArtistInfo, ArtWorkCard,ArtWorkPrice, ArtWorkActions,  LikesAmount, CommentsAmount, ArtWorksWidget, ArtWorkActionItem, ArtWorkImg, ArtWorkTitle, LeftContainer, UserImg, FollowingNumber,	FollowingTitle, UserDescription, UserNameContainer, UserFullNameContainer, UserWidgetContainer, UserImgContainer, FollowersTitle, FollowersNumber, UserFollowersContainer, UserFollowingContainer, UserTopContainer, UserCenterContainer, UserBottomContainer, UserProfileButtonContainer, MiddleContainer, PostContainer, RightContainer, RightWidget, ProfileButton} from './AnotherArtistStyles'
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import ProductsItem from '../../components/ProductsItem';

import { getUserDetails, updateUserProfile} from '../../actions/userActions';
import Spinner from '../../components/Spinner';
import ArtWorksItem from '../../components/ArtWorksItem';
import { getArtistProducts, getIsFollowArtist, getFollowers, getFollowing, getAnotherArtistDetails, getArtistDetails, getArtistPublications, followArtist, unfollowArtist} from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import Message from '../../components/Message';

const AnotherArtist = () => {
	const dispatch = useDispatch()	
	const navigate = useNavigate()
	const {id} = useParams();
	const [artist_image, setArtistImage] = useState('')
	const [artist_bio, setArtistBio] = useState('')
	const [another_artist_id, setAnotherArtistId] = useState('')
	const [my_artist_id, setMyArtistId] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [isFollow, setIsFollow] = useState('')
	const [isShowPublications, setIsShowPublications] = useState(true)
	const [followers_amount, setFollowersAmount] = useState('')
	const [following_amount, setFollowingAmount] = useState('')
	const [isHovering, setIsHovering] = useState(false);

	const artistPublications = useSelector(state => state.artistPublications)
	const {loading: loadingProfile, error: errorProfile, success: successProfile, publications} = artistPublications

	const artistProducts = useSelector(state => state.artistProducts)
	const {loading: loadingArtistProducts, error: errorArtistProducts, success: successArtistProducts, products} = artistProducts

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo, success} = userLogin

	const userDetails = useSelector(state => state.userDetails)
	const {error, loading, user} = userDetails

	const anotherArtistDetails = useSelector(state => state.anotherArtistDetails)
	const {loading: loadingAnotherArtistDetails, success: successAnotherArtistDetails} = anotherArtistDetails

	const artistItem = useSelector(state => state.anotherArtistDetails.artist)

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading: loadingArtistDetails, success: successArtistDetails} = artistDetails

	const myArtistItem = useSelector(state => state.artistDetails.artist)

	const artistFollowers = useSelector(state => state.artistFollowers)
	const {error: artistFollowersError, success: artistFollowersSuccess, loading: artistFollowersLoading, followersList} = artistFollowers

	const artistFollowing = useSelector(state => state.artistFollowing)
	const {error: artistFollowingError, success: artistFollowingSuccess, loading: artistFollowingLoading, followingList} = artistFollowing

	useEffect(()=>{
		window.scrollTo(0, 0)

		dispatch(getAnotherArtistDetails(id))
		dispatch(getArtistPublications(id))
		dispatch(getArtistProducts(id))
		dispatch(getFollowers(id))
		dispatch(getFollowing(id))
	}, [])

	useEffect(()=>{
		if (successAnotherArtistDetails){
			setArtistImage(artistItem[0].image)
			setArtistBio(artistItem[0].description)
			setFirstName(artistItem[0].first_name)
			setLastName(artistItem[0].last_name)
			setEmail(artistItem[0].email)
			setUsername(artistItem[0].username)
			setAnotherArtistId(artistItem[0].id)

			if (successArtistDetails){
				setMyArtistId(myArtistItem[0].id)
			}
		}
		if (artistFollowersSuccess){
			setFollowersAmount(followersList.length)
		}
		if (artistFollowingSuccess){
			setFollowingAmount(followingList.length)
		}
		async function getIsFollow() {
			const formData = new FormData()
			formData.append('subscriber_id', userInfo.user.username)
			const {data} = await axios.post(`/api/users/isfollow/${id}/`, formData)
			setIsFollow(data)
		}
		getIsFollow()
	}, [artistItem,  successArtistDetails,  success, userInfo, successAnotherArtistDetails, artistFollowingSuccess, artistFollowersSuccess, myArtistItem])

	const followHandler = (e) => {
		e.preventDefault()
		dispatch(followArtist(id, userInfo.user.username))
		setIsFollow(true)
	}
	const unfollowHandler = (e) => {
		e.preventDefault()
		dispatch(unfollowArtist(id, userInfo.user.username))
		setIsFollow(false)
	}
	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};


	return (

		<MainContainer>
			<ArtistInfo>
				<UserWidgetContainer>
					<UserTopContainer>
						<UserFollowersContainer>
							<FollowersNumber>{followers_amount} </FollowersNumber>
							<FollowersTitle>Followers</FollowersTitle>
						</UserFollowersContainer>
						<UserImgContainer  >
							<UserImg src={artist_image}/>
						</UserImgContainer>
						<UserFollowingContainer>
							<FollowingNumber>{following_amount} </FollowingNumber>
							<FollowingTitle>Following</FollowingTitle>
						</UserFollowingContainer>
					</UserTopContainer>
					<FollowButtonContainer>
						{ isFollow ? (
							<UnfollowButton  onClick = {unfollowHandler} >UNFOLLOW</UnfollowButton>
						):(
							<FollowButton onClick = {followHandler} >FOLLOW</FollowButton>
						)}
					</FollowButtonContainer>
					<UserCenterContainer>
						{loadingAnotherArtistDetails||loadingProfile && <Spinner/>}			
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
							<EmptyMessage>This artist has no publications</EmptyMessage>
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
							This artist has no products
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
export default AnotherArtist;
