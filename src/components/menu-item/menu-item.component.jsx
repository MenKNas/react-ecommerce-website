import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ( {title, image, size, link, history, match} ) => {
    return (
        <div 
            className={`${size} menu-item`} 
            style={{backgroundImage : `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
            onClick= { () => history.push(`${match.url}${link}`)}
        >
            <div className="content">
                <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);