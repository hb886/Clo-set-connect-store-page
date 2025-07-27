import React from 'react'
import { SearchContainer, SearchInput,  } from './SearchBar.style'
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import AppContext from '../../Context';

const SearchBar = () => {

  const{ searchTerm, setSearchTerm } = useContext(AppContext)

  return (
    <div style={{display:"flex", justifyContent:"center", width:"100%",}}>
    <SearchContainer>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",}}>
        <SearchInput placeholder='Find the item you are  looking for' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

        <FaSearch  style={{ color: 'white', fontSize: '14px', cursor:"pointer"}} />
      </div>
    </SearchContainer>
    </div>
  )
}

export default SearchBar
