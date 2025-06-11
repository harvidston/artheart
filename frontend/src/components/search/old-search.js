
				<SearchContainer>
					<SearchBox className='search-box'>
						<SearchInput type='text' placeholder = 'Type to search...' value={searchTxt} onChange = {e => fetchSearchData(searchTxt) & setSearchTxt(e.target.value)}/>
							<SearchClick className={`search-box ${isSearchBtnActive == "active"}`} onClick={() => setIsSearchBtnActive()}>		
							Click to Search
							<SearchBtn ><BsSearch/></SearchBtn>
							<CrossBtn><RxCross1/></CrossBtn>
						</SearchClick>
					</SearchBox>
				</SearchContainer>

	async function fetchSearchData(search_data) {
		const {data} = await axios.get('/api/publications/?search='+search_data)
		setPublications(data)
	}
