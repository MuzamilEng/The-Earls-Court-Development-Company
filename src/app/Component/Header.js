import React, { useState } from 'react'
import { header } from '../Data'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SideMenu from './SideMenu';


const Header = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    return (
        <>
            {header.map((item, index) => (
                <div key={index} className="header">
                    <header>
                        <img src={item.logo} alt="Earls Court" />
                        <nav>
                            <div className="lists">
                                {item.navLists.map((list, index) => (
                                    <span key={index}>
                                        <Link className='navLists' to={list.href}>{list.name}</Link>
                                    </span>
                                ))}
                            </div>
                            <div className="icons">
                                {item.icons?.map((icon, index) => (
                                    <Link key={index} to={icon?.url}>
                                        <span className='icon'>{icon?.icon}</span>
                                    </Link>
                                ))}
                            </div>
                            <p>HAVE YOUR SAY</p>
                        </nav>
                    </header>
                </div>
            ))}
            <div className="small_screen_header">
                <div>
                    <h1>The <br /> Earls Court Development Company</h1>
                    <Icon icon="ph:list-bold" color="gray" className='Icon' onClick={() => setShowSideMenu(!showSideMenu)} />
                </div>
            {showSideMenu && (
                <div className="side-menu-overlay">
                    <SideMenu closeSideMenu={() => setShowSideMenu(false)}/>
                </div>
            )}
            </div>
        </>
    )
}

export default Header
