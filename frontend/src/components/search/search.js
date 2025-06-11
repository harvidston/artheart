import { useEffect, useState, useRef } from "react";
import {
	ClickToSearchBtn,
  SearchInput,
	TitlePreview,
	SearchBtn,
  IconRightArrow,
  IconMagnifyingGlass
} from "./SearchStyles";
import {BsSearch} from 'react-icons/bs';

function Search() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;
  const inputElement = useRef(null);

  useEffect(() => {
	   if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [showSearchInput]);

  return (
    <ClickToSearchBtn type='text' 
      onClick={() => setIsHovered(true) & {showSearchInput }}
	  clicked={showSearchInput}
    >

      <SearchInput type='text' placeholder = 'What are you looking for ?' showSearchInput={showSearchInput} ref={inputElement}/>
		
	  {showSearchInput ? <SearchBtn ><BsSearch/></SearchBtn> :<TitlePreview>Type here</TitlePreview>}
    </ClickToSearchBtn>
  );
}

export default Search;

