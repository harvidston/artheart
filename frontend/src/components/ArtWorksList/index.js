import React, { useContext, useState, useEffect } from 'react';
import ArtWorksItem from '../ArtWorksItem';
import { ArtWorksContainer, ArtWorksWidget } from './ArtWorksListStyles';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getUsers} from '../../actions/userActions';

const ArtWorksList =  ({publications}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const users = useSelector(state => state.users)
	const {success, usersList} = users
	
	useEffect(() => {
		if(!success){
			dispatch(getUsers())
		}
	}, [usersList, success])

	return(
			<ArtWorksContainer>
				<ArtWorksWidget>
					{publications.map((publication)=> 
						<ArtWorksItem key = {publication.id} publication = {publication} />
					)}
				</ArtWorksWidget>
			</ArtWorksContainer>

	)
}
export default ArtWorksList;
