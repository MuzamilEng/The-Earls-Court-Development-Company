import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { sideBar } from '../Data';
import { Link } from 'react-router-dom';

const CustomDropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='footer2'>
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
                        <div style={{ color: 'white', padding: '2vw', paddingLeft: '4vw' }} className='' key={index}>
                            {option?.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const SideMenu = ({closeSideMenu}) => {
    return (
        <>
            <div className='footer2_container'>
                <Icon icon='fluent-mdl2:cancel' className='cancel_icon' onClick={closeSideMenu}/>
                <div className='footer_lists'>
                    {sideBar?.map((item, index) => {
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
                <div className="flex justify-between items-center footer2_social_icons">
                    <div className="flex">
                        {sideBar?.[0]?.icons?.map((icon, index) => {
                            return (
                                <div key={index} className='flex justify-between'>
                                    <Link to={icon?.url} className='flex'>
                                        <span className='footer2_icons' >{icon?.icon}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <p>HAVE YOUR SAY</p>
                </div>

            </div>
        </>
    );
};

export default SideMenu;
