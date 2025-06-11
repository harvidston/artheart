import React, { useEffect, useState, CSSProperties } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'
import DotLoader from 'react-spinners/DotLoader'

import styled  from "styled-components";

export const SpinnerContainer = styled.div`
	position: absolute;
	z-index: 99;
	display: flex;
	opacity: 100%;
`
function Spinner(){
	return(
		<SpinnerContainer>
		<DotLoader
			color="#899C88"
			size={70}
			speedMultiplier={1.3}
		/>
		</SpinnerContainer>
	)
}
export default Spinner;
