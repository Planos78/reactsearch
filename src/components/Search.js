import React from 'react'
import './Search.css'
export default function Search({searchText, onChangeSearch}) {
    return (
        <div className='app-search'>
            <input className='app-search-input' type='text' placeholder='Search...' value={searchText} onChange={onChangeSearch} />
        </div>
    )
}
