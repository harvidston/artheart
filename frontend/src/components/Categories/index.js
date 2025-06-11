import React, { useEffect, useState } from 'react';
import { CategoriesContainer, CategoriesWidget, SelectCategoryButton, CategoryList, CategoryListItem, CategoryName } from './CategoriesStyles';

import axios from 'axios';
import {MdOutlineArrowDropDown, MdOutlineArrowDropUp} from 'react-icons/md';
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti';
const Categories = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selescted, setSelected] = useState()

	const [categories, setCategories] = useState([])	

	useEffect(() => {

		async function fetchCategories(){
			const {data} = await axios.get('/api/categories/')
			setCategories(data)
		}
		fetchCategories()

	}, [])
	return (
			<CategoriesContainer>
				<CategoriesWidget>
					<SelectCategoryButton onClick= {() => setIsOpen((prev)=>!prev)} >
						{selescted ? selescted: "Select Category"}
						{!isOpen ? (<TiArrowSortedDown/>):(<TiArrowSortedUp/>)}
					</SelectCategoryButton>
					{isOpen && (
						<CategoryList>
							{categories.map((category)=>
								<CategoryListItem activestyle='true' onClick= {() => props.fetch(category.name) & setSelected(category.name) } >
									<CategoryName>{category.name}</CategoryName>
								</CategoryListItem>)}
						</CategoryList>)}
				</CategoriesWidget>
			</CategoriesContainer>
	)
}
export default Categories;
