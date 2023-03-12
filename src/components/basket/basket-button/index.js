import React from 'react';
import BasketIcon from './basket-icon';
import './style.scss';


function BasketButton() {
    return (
        <button className='basket-button'>
            <BasketIcon />
            <span>Sepetim</span>
            
    </button>
    );
}

export default BasketButton;