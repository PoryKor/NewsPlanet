import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { MenuContext } from '../../context/navState';
import "./NavMenu.sass"


const NavMenu = ({ children }) => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const linkClick = () => {
        toggleMenuMode();
    }
    return <div className={'navigation '  + (isMenuOpen ? 'isActive' : '')}>
        <Link className='header__link' to="/news" onClick={linkClick}>
            <span className='header__link-text'>Новости</span>
        </Link>
        <Link className='header__link' to="/phoneSearch" onClick={linkClick}>
            <span className='header__link-text'>Поиск Телефона</span>
        </Link>
        <Link className='header__link' to="/timetable" onClick={linkClick}>
            <span className='header__link-text'>Расписание</span>
        </Link>
    </div>;
};

NavMenu.propTypes = {
    children: PropTypes.node,
};
export default NavMenu;
