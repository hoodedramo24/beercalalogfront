import React from 'react'
import '../styles/Beeritem.css'


function Beeritem(prop) {
    return (
        <div className={'beeritem-container beeritem-border beeritem-border-style'}>
            <div className={'beeritem-image-container'}>
                <img className={'beeritem-image'} src={prop.imgURL} alt={prop.name} />
                <p className={'beeritem-title'}>{prop.name}</p>
            </div>
            <p className={'beeritem-paragraph'}>{prop.description}</p>
        </div>
    )
}

export default Beeritem
