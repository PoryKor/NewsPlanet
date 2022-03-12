import React from 'react'
import './ListView.sass'

const ButtonComponent = (props) => {

    if(props.status === true)
    {
        return(<div className={'addStatusButton'}>
        <div className='addButton__text-box-active'>
            <div className='addButton__text addetStatus'>{props.isActiveName}</div>
        </div>
        <div className='addButton__plus-box-active'>
            <div className='plus_container'>
                <img className='buttonSimbol' width="20px" height="20px" src={props.activeSimbol}></img>
                {/* <div className='addButton__plus'>
                </div> */}
            </div>
        </div>
    </div>)
    } else
    return (
        <div className={'cardInfo__addButton '} onClick={props.onClick}>
            <div className='addButton__text-box'>
                <div className='addButton__text'>{props.nameButton}</div>
            </div>
            <div className='addButton__plus-box'>
                <div className='plus_container'>
                    <img className='buttonSimbol' width="20px" height="20px" src={props.simbol}></img>
                    {/* <div className='addButton__plus'>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ButtonComponent