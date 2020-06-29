import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({text, type}) => {
    return ( <button className="custom-button" type={type}> {text} </button> );
}
 
export default CustomButton;