import React, {useState} from 'react';
import logo from '../images/ifit-coach-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faBars } from '@fortawesome/free-solid-svg-icons'

function TopMenu() {
    //Change the state of the Navigation Menu For Mobile
    const [menuActive, setMenuState] = useState(false);

    return (
        <header id="#home">
            <nav className="top-menu-nav">
                <ul className="top-menu-links">
                    <li><a href="https://www.ifit.com/">Blog</a></li>
                    <li><a href="https://www.ifit.com/">Nourish</a></li>
                    <li><a href="https://www.ifit.com/">Shop</a></li>
                </ul>
            </nav>
            <nav className="main-menu-nav">
                <div className="main-menu-nav__logo">
                    <a href="#home"><img src={logo} alt="logo" /></a>
                </div>

                <div className="main-menu-nav-icons__open">
                    <FontAwesomeIcon className="fav-icons" icon={faBars} onClick={() => setMenuState(true)} />
                </div>

                <ul className={ 
                    //If menuActive is true, show the mobile nav menu -- else show the nav links and hide the mobile menu
                    menuActive ? 'main-menu-links active': 'main-menu-links'
                    }
                >
                    <div id="close-icon" className="main-menu-links-icons__ close">
                        <FontAwesomeIcon className="fav-icons" icon={faWindowClose} onClick={() => setMenuState(false)} />
                    </div>

                    <ul className="main-menu-links__navigation">
                        <div className="main-menu-links__navigation--container">
                            <li><a href="https://www.ifit.com/">Exercise</a></li>
                            <li><a href="https://www.ifit.com/">Nutrition</a></li>
                            <li><a href="https://www.ifit.com/">Activity</a></li>
                            <li><a href="https://www.ifit.com/">Sleep</a></li>
                        </div>

                        <button id="signup-button">
                            Sign Up
                        </button>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu
