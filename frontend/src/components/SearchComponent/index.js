import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {SearchContainer, SearchBar, ClickToSearchBtn, SearchInput, LoadingButtonContainer, LoadingButton, GreenLoading, SearchBtnContainer, SearchBtn, TitlePreview} from './SearchComponentStyles';
import {BsSearch} from 'react-icons/bs';
import useDebounce from '../../hooks/useDebounce';
import {FaSearch} from 'react-icons/fa';

const SearchComponent = (props) => {

	const [searchTxt, setSearchTxt] = useState("");
	const [isHovered, setIsHovered] = useState(false);
	const inputElement = useRef(null);
	const [isSearching, setIsSearching] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const showSearchInput = isHovered || isFocused;

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	}, [showSearchInput]);

	const debounced = useDebounce(searchTxt, 1000);

	useEffect(() => {
		async function fetchPublicationsBySearch() {
			const {data} = await axios.get(`/api/publications/?search=${searchTxt}`)
			props.search(data)
			setIsSearching(false);
		}
		fetchPublicationsBySearch()
	}, [debounced])

	return (
			<SearchContainer>
				<SearchBar>
					<ClickToSearchBtn 
						type='text' 
						onClick={() => setIsHovered(true) & {showSearchInput }}
						clicked={showSearchInput}
					>
					<SearchInput
						type='text'
						placeholder = 'What are you looking for ?'
						value={searchTxt}
						onChange = {e =>  {setSearchTxt(e.target.value); setIsSearching(true) }}
						showSearchInput={showSearchInput}
						ref={inputElement}
					/>



				{ isSearching ? (
					<LoadingButtonContainer>
						<LoadingButton/>
					</LoadingButtonContainer>
				):null}

				{showSearchInput ?
					<SearchBtnContainer><SearchBtn><BsSearch/></SearchBtn></SearchBtnContainer>
				:<TitlePreview>Search &nbsp;<BsSearch/></TitlePreview>}

				</ClickToSearchBtn>
				</SearchBar>
			</SearchContainer>
	)
}

export default SearchComponent;
