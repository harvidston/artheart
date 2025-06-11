import React from 'react';
import {Alert} from 'react-bootstrap';

import styled  from "styled-components";

export const AlertContainer = styled.div`
	position: absolute;
	z-index: 99;
	background: #99627A;
	font-size: 14px;
	border-radius: 15px;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 20px;
	padding-bottom: 20px;
	top: 25vh;
	opacity: 80%;
`

function Message({ variant, children }) {
	return (
		<AlertContainer>
			<Alert> {children}</Alert>
		</AlertContainer>
	)
}

export default Message;
