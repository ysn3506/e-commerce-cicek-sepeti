import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';

function Button({classes, clickHandler, children}) {
    return <button className={`button ${classes}`} onClick={clickHandler}>
        {children}
    </button>;
}

Button.propTypes = {
    classes: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
    children:PropTypes.any
}

Button.defaultProps = {
    classes: "",
    children:undefined
}

export default Button;
