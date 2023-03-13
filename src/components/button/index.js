import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';

function Button({classes, clickHandler, children, isDisable}) {
    return (
      <button
        className={`button ${classes}`}
        onClick={clickHandler}
        disabled={isDisable}
      >
        {children}
      </button>
    );
}

Button.propTypes = {
    classes: PropTypes.string,
    clickHandler: PropTypes.func,
    children: PropTypes.any,
    isDisable:PropTypes.bool
}

Button.defaultProps = {
    classes: "",
    clickHandler:undefined,
    children: undefined,
    isDisable: false
}

export default Button;
