import React from 'react'
import './TattooPost.css'

export default function TattooPost({ selectedTattoo, onBgClick }) {
    return (
        <div className='tattoo-post'>
            <div className='tattoo-bg' onClick={onBgClick}>
                <div className='tattoo-content' >
                    <div className='box'>
                        <img src={selectedTattoo.fullUrl} />
                        <h3 className='title'>{selectedTattoo.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
