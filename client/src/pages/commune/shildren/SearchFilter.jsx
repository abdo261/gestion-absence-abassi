import React from 'react'
import Input from '../../../components/share/Input'

const SearchFilter = ({searchValue,setSearchValue}) => {

  return (
    <div className='search-filter'>
        <Input defaultValue={searchValue} onchange={setSearchValue} classParent="form-input" className="form-control" placeholder="filtré Communes"/>
    </div>
  )
}

export default SearchFilter