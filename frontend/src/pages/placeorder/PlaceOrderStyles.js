import styled, { css, keyframes } from "styled-components";

export const EmptyMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	background: red;
	border-radius: 20px;
	margin-top: 100px;
	color: white;
	font-size: 20px;
	font-weight: 600;

	padding: 30px;
	background: #99627A;
	user-select: none;
	-moz-user-select: none;
	opacity: 80%;

`

export const EmptyCartIcon = styled.div`
	font-size: 24px;
	color: white;
	margin-left: 15px;
`
export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 90vh;
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;
`


export const CartContainer = styled.div`
	position: absolute;
	background: #171616;
	//background: #0F0E0E;
	//border: 1px solid #2b2d2e;
	border-radius: 30px;
	height: 75vh;
	width: 96%;
	bottom: 4vh;
	left: 2%;
	display: flex;
	background-image: linear-gradient(to left top, #0f0e0e, #111010, #131212, #151414, #171616);
	background-image: linear-gradient(to right, #000000, #060606, #0c0c0c, #101010, #151515);
	background: #0c0c0c;

`

export const PageTitle = styled.div`
	color: #899c88;
	font-size: 22px;
	font-weight: 600;
	margin-left: 3vw;
	margin-top: 1.5vh;
	height: 5%;
	width: 90%;

`
export const OrderInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 100%;
	width: 70%;
	overflow: auto;
	margin-top: 40px;
`
export const ProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 100%;
	width: 100%;
	overflow: auto;
	margin-top: 20px;
`
export const ShippingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	padding-bottom: 60px;
	border-bottom: 1px solid #2b2d2e;
`
export const Title = styled.div`
	width: 100%;
	font-size: 32px;
	font-weight: 600;
	color: #6a8b86;
	margin-bottom: 50px;
`
export const Address = styled.div`
	width: 100%;
	font-size: 18px;
	font-weight: 300;
	color: white;

`
export const PaymentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	margin-top: 20px;
	padding-bottom: 60px;
	border-bottom: 1px solid #2b2d2e;
`
export const SubtotalContainer = styled.div`
	display: flex;
	height: 100%;
	width: 40%;


`
export const SubtotalPriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 80%;
`

export const SubtotalPrice = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 25%;
	font-size: 18px;
	font-weight: 300;
	color: #c4c4c4;
	color: #899C88;
	color: #6a8b86;
	color: white;
	//background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	filter: drop-shadow(5px 5px 40px #000000);
	border-bottom: 1px solid #2b2d2e;
`
export const SubName = styled.div`
	width: 40%;

`
export const SubPrice = styled.div`
	width: 40%;
	
`
export const SubtotalItemsAmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20%;
	font-size: 30px;
	font-weight: 600;
	color: white;
	text-align: center;
`
export const SubtotalItemsAmount = styled.div`
	height: 20px;
	width: 100%;

`
export const SubtotalWidget = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;

	height: 60%;
	width: 60%;

	border-radius: 20px;
	border: 1px solid #2b2d2e;
	margin-top: 40px;
	margin-left: 150px;
	box-shadow: 0px 0px 15px 5px #000;

`
export const SubtotalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-content: space-between;
	height: 90%;
	width: 90%;
	border-bottom: 1px solid #2b2d2e;
`

export const CheckOutButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40%;
	width: 90%;
`
export const CheckOutButton = styled.button`
	height: 80px;
	width: 100%;
	font-size: 20px;
	font-weight: 600;
	color: white;
	background: #6a8b86;
	border-radius: 15px;
	border: none;
	transition: 0.5s;
	cursor: pointer;
	border: 1px solid #2b2d2e;
	text-transform: uppercase;
	&:hover{
		background: transparent;
	}
	&:disabled{
		background: black;
		cursor: default;
	}

`

export const CartButton = styled.button`
	height: 50px;
	width: 50px;
	border: none;
	background:	transparent;
	font-size: 32px;
	color: #c4c4c4;
	cursor: pointer;
	margin-left: 90px;


`
	





