import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__box">
            <div className="header__box-lable">
            <Link className='header__link' to="/">
                <img alt="lable" src=''/>
            </Link>
            <Link className='header__link' to="/news">
                <span className='header__link-text'>Новости</span>
            </Link>
            </div>
            <div className='heder__box-user'>
            <Link className='header__link' to="/news">
                <span className='header__link-text'>Вход</span>
            </Link>
            </div>
            </div>
        </header>
    )
}

export default Header
