import React, { useState, useEffect} from 'react';

import {MainContainer, RightContainer, SearchContainer, LeftContainer,CartButtonContainer, CartButton, CatalogContainer, SwitchProductsButton, SwitchButtonContainer, SwitchPublicationsButton, MiddleContainer, PaginationContainer, PaginationClass, PaginationItemButton   } from './PaginationStyles';

const Pagination = ({pubsPerPage, totalPubs, paginate}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPubs / pubsPerPage); i++){
		pageNumbers.push(i);
	}

	return (
			<MainContainer>
			{pageNumbers.map(number=>(
				<PaginationContainer key={number}>
					<PaginationItemButton onClick={()=> paginate(number)} >
						{number}
					</PaginationItemButton>
				</PaginationContainer>
			))}
			</MainContainer>
	)
}
export default Pagination;
