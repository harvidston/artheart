import React, { useContext, useState, useEffect } from 'react';
import ArtWorksItem from '../ArtWorksItem';
import { ArtWorksContainer, ArtWorksWidget } from './ProductsListStyles';

import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getUsers} from '../../actions/userActions';
import ProductsItem from '../ProductsItem';
const ProductsList =  ({products}) => {

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
					{products.map((product)=> 
						<ProductsItem key = {product.id} product = {product} />
					)}
				</ArtWorksWidget>
			</ArtWorksContainer>

	)
}
export default ProductsList;
