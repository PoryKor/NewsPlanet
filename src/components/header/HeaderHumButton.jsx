import React, { useContext } from 'react';
import { MenuContext } from '../../context/navState'
import './HeaderHumButton.css'


const HeaderHumButton = () => {

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
      toggleMenuMode();
    };

    return (
       
            <div className={'buttonBurg ' + (isMenuOpen ? 'active' : '')}
                    onClick={clickHandler}>
                      <div className = "buttonBurg__Inside">
                <span className='line One'></span>
                <span className='line Two'></span>
                <span className='line Tree'></span>
                </div>
            </div>
        
    )
   

}
export default HeaderHumButton;