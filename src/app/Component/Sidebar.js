import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { sideBar2 } from '../Data';
import { Link } from 'react-router-dom';

const CustomDropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='sidebar'>
            <div
                className='container'
                onClick={toggleDropdown}
            >
                <h1>{title}</h1>
                <Icon icon="ep:arrow-down-bold" color="white" />
            </div>
            {isOpen && (
                <div className='bg-inherit'>
                    {options?.map((option, index) => (
                        <div style={{ color: 'white', padding: '.4vw', paddingLeft: '.3vw' }} className='' key={index}>
                            {option?.label} 
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Sidebar = () => {
    return (
        <>
            <div className='sidebar_container'>
                <div className='footer_lists'>
                    {sideBar2?.map((item, index) => {
                        return (
                            <main key={index}>
                                {item?.link_section?.map((link, subIndex) => {
                                    return (
                                        <CustomDropdown key={subIndex} title={link?.title} options={link?.links} />
                                    );
                                })}
                            </main>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
