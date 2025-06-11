import React, { useState, useEffect} from 'react';
import {Navigation, NavigationItem, NavigationContainer, LinkItem, LinkContainer, } from './CheckOutOrderStepsStyles.js';

const CheckOutOrderSteps = ({step1, step2, step3, step4}) => {

	return (
		<Navigation>
			<NavigationItem>
				{step1?(
					<LinkContainer to ='/authorization'>
						<LinkItem>Login</LinkItem>
					</LinkContainer>
				):(
					<LinkItem disabled> Login</LinkItem>
				)}
			</NavigationItem>

			<NavigationItem>
				{step2 ?(
					<LinkContainer to ='/shipping'>
						<LinkItem>Shipping</LinkItem>
					</LinkContainer>
				):(
					<LinkItem disabled> Shipping</LinkItem>
				)}
			</NavigationItem>

			<NavigationItem>
				{step3?(
					<LinkContainer to ='/payment'>
						<LinkItem>Payment</LinkItem>
					</LinkContainer>
				):(
					<LinkItem disabled> Payment</LinkItem>
				)}
			</NavigationItem>

			<NavigationItem>
				{step4?(
					<LinkContainer to ='/placeorder'>
						<LinkItem>Place Order</LinkItem>
					</LinkContainer>
				):(
					<LinkItem disabled>Place Order</LinkItem>
				)}
			</NavigationItem>
		</Navigation>

	)
}
export default CheckOutOrderSteps;
