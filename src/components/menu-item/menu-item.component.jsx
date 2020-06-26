import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ( {title, image, size} ) => {
    return (
        <div className={`${size} menu-item`} style={{backgroundImage : `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="content">
                <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </div>
    )
}