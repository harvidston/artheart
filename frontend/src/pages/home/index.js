import React, { useState, useEffect} from 'react';
import {MainContainer, TopContainer, PopUpCloseButton, PopUpFollowersTitle, FollowerImg, FollowerItem, FollowerRight, FollowerLastName, FollowerUsername, FollowerFirstName, FollowerImgContainer,   LeftContainer, UserImg, FollowingNumber,	FollowingTitle, UserDescription, UserNameContainer, UserFullNameContainer, UserWidgetContainer, UserImgContainer, FollowersTitle, FollowersNumber, UserFollowersContainer, UserFollowingContainer, UserTopContainer, UserCenterContainer, UserBottomContainer, UserProfileButtonContainer, MiddleContainer, PostContainer, RightContainer, RightWidget, ProfileButton} from './HomeStyles'
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import img from './ksu.jpg';

import ArtWorksItem from '../../components/ArtWorksItem';
import FeedItem from '../../components/FeedItem';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PopUpScreen from '../../components/PopUpScreen';

import { getPublicationsFeed} from '../../actions/publicationActions';
import { getUserDetails, getArtistDetails, getFollowers, getFollowing} from '../../actions/userActions';
import {RxCross1} from 'react-icons/rx';

const Home = () => {
	
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [isMyProfile, setIsMyProfile] = useState(true)
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [username, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [artist_image, setArtistImage] = useState('')
	const [artist_bio, setArtistBio] = useState('')
	const [followers_amount, setFollowersAmount] = useState('')
	const [following_amount, setFollowingAmount] = useState('')
	const [pop_up_active, setPopUpActive] = useState(false)
	const [isShowFollowers, setIsShowFollowers] = useState(true)

	const userDetails = useSelector(state => state.userDetails)
	const {user} = userDetails

	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading, success} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	const publicationsFeed = useSelector(state => state.publicationsFeed)
	const {loading: publicationsFeedLoading, success: publicationsFeedSuccess, publications} = publicationsFeed

	const artistFollowers = useSelector(state => state.artistFollowers)
	const {error: artistFollowersError, success: artistFollowersSuccess, loading: artistFollowersLoading, followersList} = artistFollowers

	const artistFollowing = useSelector(state => state.artistFollowing)
	const {error: artistFollowingError, success: artistFollowingSuccess, loading: artistFollowingLoading, followingList} = artistFollowing
	
	useEffect(()=>{
		if (!userInfo) {
			navigate('/authorization');
		}else{
			dispatch(getArtistDetails(userInfo.user.username))
			dispatch(getUserDetails('profile'))
			dispatch(getPublicationsFeed(userInfo.user.username))
			dispatch(getFollowers(userInfo.user.username))
			dispatch(getFollowing(userInfo.user.username))
		}
	}, [userInfo])

	useEffect(() => {
		if (!userInfo) {
			navigate('/authorization');
		}else{
			if (!success){
				dispatch(getArtistDetails(userInfo.user.username))
			}else{
				setArtistImage(artistItem[0].image)
				setArtistBio(artistItem[0].description)
				setFirstName(artistItem[0].first_name)
				setLastName(artistItem[0].last_name)
				setEmail(artistItem[0].email)
				setUserName(artistItem[0].username)
			}
			if (artistFollowersSuccess){
				setFollowersAmount(followersList.length)
			}
			if (artistFollowingSuccess){
				setFollowingAmount(followingList.length)
			}
		}

	}, [artistItem, success, userInfo, artistFollowingSuccess, artistFollowersSuccess])



	const profileBtnHandler = (e) => {
		e.preventDefault()
		navigate('/artist')
		
	}
	const navigateToProfileHandler = (artist_id) => {
		navigate(`/artist/${artist_id}`)
	}
	return (

		<>
		{userInfo ? (
		<MainContainer>

			<PopUpScreen active = {pop_up_active} setActive = {setPopUpActive} >
			{isShowFollowers ? (
				<>
				<TopContainer>
					<PopUpFollowersTitle>{followers_amount} Followers</PopUpFollowersTitle>
					<PopUpCloseButton onClick={()=> setPopUpActive(false)}><RxCross1/></PopUpCloseButton>
				</TopContainer>

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
			):(
			<>
				<TopContainer>
					<PopUpFollowersTitle>{following_amount} Following</PopUpFollowersTitle>
					<PopUpCloseButton onClick={()=> setPopUpActive(false)}><RxCross1/></PopUpCloseButton>
				</TopContainer>

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
			</PopUpScreen>
			<LeftContainer>
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
						<ProfileButton onClick={profileBtnHandler}> My profile </ProfileButton>
					</UserProfileButtonContainer>	
				</UserWidgetContainer>
			</LeftContainer>
			<MiddleContainer>
					{publications?.map((publication) => (
						<FeedItem key = {publication.id} publication = {publication} artist = {artistItem[0]} />
					))}
			</MiddleContainer>
			<RightContainer>
				<RightWidget>
				</RightWidget>
			</RightContainer>
		</MainContainer>
		):(
			<MainContainer></MainContainer>
		)}
		</>
	)
}
export default Home;
