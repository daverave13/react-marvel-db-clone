import React from 'react';
import logoWhite from '../img/logo-white.png';

export default () => {
    return (
        <header className="header">
            <img src={logoWhite} alt="" />
            <span className="header-sub">
                database
            </span>
        </header>
    )
}