import React, { useState, useEffect} from 'react';
import {MainContainer, SettingsContainer, NavigationItem,PageTitle, ContentContainer,	NavigationContainer} from './SettingsStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import SearchComponent from '../../components/SearchComponent';
import MyProfile from '../../components/MyProfile';
import MyOrders from '../../components/MyOrders';

const AccountSettings = () => {
	const [isMyProfile, setIsMyProfile] = useState(true)

	return (
		<MainContainer>
			<PageTitle>Account Settings</PageTitle>
			<SettingsContainer>
				<NavigationContainer>
					<NavigationItem onClick={() => setIsMyProfile(true)}>
						My Profile
					</NavigationItem>
					<NavigationItem onClick={() => setIsMyProfile(false)}>
						My Orders
					</NavigationItem>
				</NavigationContainer>
				<ContentContainer>
					{ isMyProfile ? (<MyProfile/>):(<MyOrders/>)}
				</ContentContainer>
			</SettingsContainer>
		</MainContainer>
	)
}
export default AccountSettings;
