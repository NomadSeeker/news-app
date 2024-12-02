import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';
import { IoClose, IoMenu } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleCloseOnMobile = () => {

        if(window.innerWidth <= 1150) {

            setShowMenu(false);
        }
    };


    return (
        <>
            <header className='header'>
                <nav className='nav container'>
                    <div className='logo'>
                        <NavLink to="/" style={{color:'white'}}>
                            News <span className='icon'><TbWorld /></span>

                        </NavLink>
                    </div>
                

                    <div className={`nav_items_container ${showMenu ? 'show-menu' : ''}`}>
                        <ul className='nav_items'>
                            <li>
                                <NavLink to={'/business/category=business'} className='NavLink'  onClick={handleCloseOnMobile}>
                                    Business
                                   
                                </NavLink>   
                              
                            </li>
                            <li>
                                <NavLink to={'/tech/category=technology'} onClick={handleCloseOnMobile}>
                                    Tech
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/tech/category=science'} onClick={handleCloseOnMobile}>
                                    Science
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/entertainment/category=entertainment'} onClick={handleCloseOnMobile}>
                                    Entertainment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/health/category=health'} onClick={handleCloseOnMobile}>
                                    Health
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to={'/sports/category=sports'} onClick={handleCloseOnMobile}>
                                    Sports
                                </NavLink>
                            </li>
                            
                        </ul>    
                        <div className='nav_close' onClick={handleShowMenu}>
                            <IoClose />
                        </div>
                    </div>

                    <div className='nav_toggle' onClick={handleShowMenu}>
                        <IoMenu className='nav_toggle' />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;