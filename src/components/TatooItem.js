import React from 'react'
import './TattooItem.css'

export default function TatooItem({tattoo, onTattooClick}) {
    return (
        <div>
            <div className='tattoo__items'>
                <img src={tattoo.thumbnailURL} onClick={()=>{onTattooClick(tattoo)}}/>
                <h3>{tattoo.title}</h3>
            </div>
        </div>
    )
}
