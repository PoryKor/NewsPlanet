import React,{useRef,useContext} from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'
import lableImg from '../../img/lable.svg'
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HeaderHumButton from './HeaderHumButton';
import NavMenu from './NavMenu';

const Header = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    useOnClickOutside(node, () => {
		if (isMenuOpen) {
			toggleMenuMode();
		}
	});


    return (
        <header className='header' ref={node}>
            <div className="header__box">
                <div className="header__menu">
                    <HeaderHumButton/>
                    <NavMenu/>
                </div>
                <Link className='header__link_img' to="/">
                    <img className='lable_img' alt="lable" src={lableImg} />
                </Link>
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
