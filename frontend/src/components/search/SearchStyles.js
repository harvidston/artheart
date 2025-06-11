import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./icons/search";
import ArrowRightIcon from "./icons/arrowRight";

export const ClickToSearchBtn = styled.button`
  position: relative;
	width: 10%;
  height: 70px;
  box-sizing: border-box;
  border-radius: 15px;
	border: 1px solid #0F0E0E;
	background: #171616;
  display: flex;
  align-items: center;
	cursor: pointer;
	 color: white;
	opacity: 60%;
	transition: 2s;
	font-size: 16px;
	padding: 0px 10px;
	justify-content: center;
	//transition: visibility 0.2s, opacity 0.5s linear;
	&:hover{
		opacity: 100%;
	}
	${({ clicked}) =>
    clicked &&
    css`
		width: 25%;
		//animation: pop 2s linear;
		//animation-timing-function: ease-in-out;

`}
	@keyframes pop{
		50%  {transform: scale(0.86)}
		100%  {transform: scale(1)}
}
`;

export const SearchInput = styled.input`

	height: 70px;
  width: 100%;
	opacity: 100%;
	border-radius: 15px;
	border: none;
	font-size: 16px;
	color: white;
	align-items: center;
	padding-left: 20px;	
	padding-right: 50px;
	outline: none;
	background: #171616;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;
export const TitlePreview = styled.div`
	animation: fadeIn 5s;
	font-size: 16px;
    //animation: disappear 3s 3s both infinite;
	@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
`
export const SearchBtn = styled.button`

	height: 45px;
	width: 45px;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	//margin-right: 10px;
	font-size: 16px;
	color: white;
	position: absolute;

	cursor: pointer; 
	line-height: 50px;
	text-align: center;
	border-radius: 50%;
	background: transparent;
	border: none;
`
/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;

