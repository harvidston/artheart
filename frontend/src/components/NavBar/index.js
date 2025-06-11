import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { NavigationBar, LoginUserInfo, LoginUserWidget, LoginUserDropdown, LoginUserImg, LoginUserImgContainer, ItemIcon, ItemTitle, DropdownList, DropDownLink, DropDownItem, AuthorizationWidgetContainer, WidgetText, AuthorizationWidget, WidgetIcon, NavigationLogo, Space,  NavigationMenu, MenuContainer, MenuItem, AddPublicationBtn} from './NavbarStyles';
import {AiFillHome, AiFillHeart} from 'react-icons/ai';
import {HiPlus} from 'react-icons/hi';
import {IoPersonSharp} from 'react-icons/io5';
import {IoIosColorPalette} from 'react-icons/io';
import {logout} from '../../actions/userActions';

import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti';
import {IoSettingsSharp} from 'react-icons/io5';
import {RiLogoutBoxFill} from 'react-icons/ri';
import {TfiPlus} from 'react-icons/tfi';
import {IoColorPalette} from 'react-icons/io5';
import {MdPalette} from 'react-icons/md';
import {createPublication} from '../../actions/publicationActions';
import { PUBLICATION_CREATE_RESET} from '../../constants/publicationConstants';
import {getArtistDetails, } from '../../actions/userActions';

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false)
	const [selescted, setSelected] = useState()

	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [username, setUserName] = useState('')
	const [artist_image, setArtistImage] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate();


	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin

	const artistDetails = useSelector(state => state.artistDetails)
	const {loading, success} = artistDetails

	const artistItem = useSelector(state => state.artistDetails.artist)

	useEffect(() => {
			if (!success){
				dispatch(getArtistDetails(userInfo.user.username))
			}else{
				setArtistImage(artistItem[0].image)
				setFirstName(artistItem[0].first_name)
				setLastName(artistItem[0].last_name)
				setUserName(artistItem[0].username)
			}

	}, [artistItem, success, userInfo])

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (

		<>
		<NavigationBar>
			<NavigationLogo>
			</NavigationLogo>
			<NavigationMenu>
				<MenuContainer>
					<MenuItem  to= "/home">
						<AiFillHome/>
					</MenuItem>
					<MenuItem to= "/catalog" activestyle = 'true'>
						<MdPalette/>
					</MenuItem>
					<Space/>
					<MenuItem to= "/liked" activestyle = 'true'>
						<AiFillHeart/>
					</MenuItem>
					<MenuItem to= "/artist" activestyle = 'true'>
						<IoPersonSharp/>
					</MenuItem>
						<AddPublicationBtn to="/uppload">
							<TfiPlus/>
						</AddPublicationBtn>
				</MenuContainer>
			</NavigationMenu>
			<AuthorizationWidgetContainer>
			{userInfo ? (
				<LoginUserWidget>

					<LoginUserDropdown onClick = {() => setIsOpen((prev)=>!prev)} id = 'username'>
						<LoginUserImgContainer>
							<LoginUserImg src = {artist_image}/>
						</LoginUserImgContainer>
						<LoginUserInfo>
							{first_name + ' ' + last_name}
						</LoginUserInfo>
						{isOpen ? (<TiArrowSortedUp/>):(<TiArrowSortedDown/>)}
					</LoginUserDropdown>
					{isOpen && (
						<DropdownList>
							<DropDownLink to = '/settings'>
							<DropDownItem>
								<ItemIcon><IoSettingsSharp/></ItemIcon>&nbsp;<ItemTitle>Settings</ItemTitle>
							</DropDownItem>
							</DropDownLink>
							<DropDownItem onClick = {logoutHandler}>
								<ItemIcon><RiLogoutBoxFill/></ItemIcon>&nbsp;<ItemTitle>Log out</ItemTitle>
							</DropDownItem>
						</DropdownList>)}
				</LoginUserWidget>
			):(

				<AuthorizationWidget to= "/authorization" activestyle = 'true'>
					<WidgetIcon><IoPersonSharp/></WidgetIcon>
					<WidgetText>Login</WidgetText>
				</AuthorizationWidget>


			)}
			</AuthorizationWidgetContainer>
		</NavigationBar>
		</>
	)
}
export default Navbar;

