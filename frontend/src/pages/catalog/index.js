import React, { useState, useEffect} from 'react';
import {MainContainer, RightContainer, SearchContainer, LeftContainer,CartButtonContainer, CartButton, CatalogContainer, SwitchProductsButton, SwitchButtonContainer, SwitchPublicationsButton, MiddleContainer } from './CatalogStyles';
import axios from 'axios';
import Categories from '../../components/Categories';
import ArtWorksList from '../../components/ArtWorksList';
import SearchComponent from '../../components/SearchComponent';
import SearchProductsComponent from '../../components/SearchProductsComponent';
import ProductsList from '../../components/ProductsList';
import {BsFillCartFill} from 'react-icons/bs';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const Catalog = () => {

	const navigate = useNavigate()
	const [publications, setPublications] = useState([])
	const [products, setProducts] = useState([])
	const [isShowPublications, setIsShowPublications] = useState(true)
	const [currentPage, setCurrentPage] = useState(1);
	const [pubsPerPage, setPubsPerPage] = useState(10);

	const cart = useSelector(state => state.cart)
	const {cartItems} = cart

	useEffect(() => {
		async function fetchPublications() {
			const {data} = await axios.get(`/api/publications/`)
			setPublications(data)
		}
		fetchPublications()
		async function fetchProducts() {
			const {data} = await axios.get(`/api/product/`)
			setProducts(data)
		}
		fetchProducts()
	}, [])

	async function fetchPublicationsByCategory(category) {
		const {data} = await axios.get('/api/publications/?category='+category)
		setPublications(data);
	}
	async function fetchProductsByCategory(category) {
		const {data} = await axios.get('/api/product/?category='+category)
		setProducts(data);
	}

	const cartButtonHandler = (e) => {
		e.preventDefault()
		navigate(`/cart`)
	}
	const indexOfLastPublication = currentPage * pubsPerPage;
	const indexOfFirstPublication = indexOfLastPublication - pubsPerPage;
	const currentPublications = publications.slice(indexOfFirstPublication, indexOfLastPublication);
	const currentProducts = products.slice(indexOfFirstPublication, indexOfLastPublication);
	
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<MainContainer>
			{ isShowPublications ? (
				<>
			<Categories fetch = {fetchPublicationsByCategory}/>
			<CatalogContainer>
			<MiddleContainer>
				<LeftContainer></LeftContainer>
				<SwitchButtonContainer>
					<SwitchPublicationsButton autoFocus onClick={() => setIsShowPublications(true)} >Publications</SwitchPublicationsButton>
					<SwitchProductsButton onClick={() => setIsShowPublications(false)}>Products</SwitchProductsButton>
				</SwitchButtonContainer>

				<RightContainer>
					<CartButtonContainer>
					</CartButtonContainer>
					<SearchContainer>
						<SearchComponent search = {setPublications}/>
					</SearchContainer>
				</RightContainer>
			</MiddleContainer>


				<ArtWorksList key = {publications.id} publications = {currentPublications} />
				<Pagination pubsPerPage={pubsPerPage} totalPubs={publications?.length} paginate={paginate}/>
			</CatalogContainer>

				</>
			):(
				<>
			<Categories fetch = {fetchProductsByCategory}/>
			<CatalogContainer>

			<MiddleContainer>
				<LeftContainer></LeftContainer>
				<SwitchButtonContainer>
					<SwitchPublicationsButton onClick={() => setIsShowPublications(true)}>Publications</SwitchPublicationsButton>
					<SwitchProductsButton onClick={() => setIsShowPublications(false)}>Products</SwitchProductsButton>
				</SwitchButtonContainer>

				<RightContainer>
					<CartButtonContainer>
						<CartButton onClick = {cartButtonHandler}><BsFillCartFill/>{cartItems.length} </CartButton>
					</CartButtonContainer>
					<SearchContainer>
						<SearchProductsComponent search = {setProducts}/>
					</SearchContainer>
				</RightContainer>
			</MiddleContainer>


				<ProductsList key = {products.id} products = {currentProducts} />
				<Pagination pubsPerPage={pubsPerPage} totalPubs={products?.length} paginate={paginate}/>
			</CatalogContainer>

				</>
			)}


		</MainContainer>

	)
}
export default Catalog;
