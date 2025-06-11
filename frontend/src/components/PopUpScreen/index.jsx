import React, { useState, useEffect, useRef, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import { MainContainer, PopUpContent, ClosePopUpButton } from './PopUpScreenStyles';
import "./pop.css";

const PopUpScreen = ({active, setActive, children}) => {

	return (
		<div className={active ? "modal active":"modal"} onClick = {()=>setActive(false)}>
			<div  className = "modal__content" onClick = {e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
export default PopUpScreen;
