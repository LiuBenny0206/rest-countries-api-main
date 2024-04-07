import React, {useState} from 'react';
import {ReactComponent as MoonIcon} from '../images/moon_icon.svg';
import {ReactComponent as SunIcon} from '../images/sun_icon.svg';


function Header({ isDarkMode, setIsDarkMode }) {

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`header ${isDarkMode ? 'header-dark-mode' : ''}`}>
            <p id='header-title'>Where is the world?</p>
            <div className='header-theme'>
                {!isDarkMode ? (
                    <MoonIcon onClick={handleToggleDarkMode} className='header-theme-icon' aria-label='Activate dark mode'/>
                ) : (
                    <SunIcon onClick={handleToggleDarkMode} className='header-theme-icon' aria-label='Activate light mode'/>
                )}
                {!isDarkMode ? (
                    <p className='header-theme-name'>Dark Mode</p>
                ) : (
                    <p className='header-theme-name'>Light Mode</p>
                )}
            </div>
        </div>
    );
}


export default Header;