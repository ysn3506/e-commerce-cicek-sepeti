import React from 'react';
import './style.scss';

function LoadingSpinner() {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}

export default LoadingSpinner;