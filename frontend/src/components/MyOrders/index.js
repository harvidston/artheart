import React, { useState, useEffect} from 'react';
import {AddressContainer, AddressTitle} from './AddressStyles';
import axios from 'axios';

const MyOrders = () => {

	const [publications, setPublications] = useState([])
	const [isMyProfile, setIsMyProfile] = useState([])

	useEffect(() => {
		async function fetchPublications() {
			const {data} = await axios.get(`/api/publications/`)
			setPublications(data)
		}
		fetchPublications()
	}, [])

	async function fetchPublicationsByCategory(category) {
		const {data} = await axios.get('/api/publications/?category='+category)
		setPublications(data);
	}

	return (
			<AddressContainer>
				<AddressTitle>Address</AddressTitle>
			</AddressContainer>
	)
}
export default MyOrders;
