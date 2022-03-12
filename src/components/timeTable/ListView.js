import React, { useState } from 'react'
import Program from './Program'
import './ListView.sass'
import ButtonComponent from './ButtonComponent'
import plusButton from '../../img/plus_icon.svg'
import checkmark from '../../img/checkmark.svg'

const ListView = () => {
    const [isShowProgram, setisShowProgram] = useState(true)
    const [isAddClick, setAddClick] = useState(false)



    const onProgramClick = () => {
        setisShowProgram(!isShowProgram)
    }

    const onAddButtonClick = () => {
        setAddClick(!isAddClick)
        setTimeout(() => {
        setAddClick(!isAddClick)
        }, 2000); 
    }

    let fetchProgram = [{ num: '1', text: 'Новогодняя столица России 2021 — итоги проекта' },
    { num: '2', text: 'Календарь событий 2021.' },
    { num: '3', text: 'Космос как событие — запуск второй очереди музея Истории космонавтики' }
        , { num: '4', text: 'Город науики и технологий — 65 лет Обнинску.' }
        , { num: '5', text: 'День города как региональный праздник — 650 лет Калеге..' }
        , { num: '6', text: 'Эктотуризм как тренд развития — маршруты, новые проекты, инвесторы..' }]

    return (
        <div className='list-Box'>
            <div className='header__list'>
                <div className='header__data'>
                    <span className='data-span'>12 октября </span>
                    <div className=''></div>
                    <div className='brakeline-box'>
                        <div className='brakeline'></div>
                    </div>
                    <span className='data-span'>Вторник</span>
                </div>
            </div>
            <div className='mainList'>
                <div className='mainList-box'>
                    <div className='cardInfo'>
                        <div className='cardInfo__time'>
                            <span className='cardInfo__data'>14:00</span>
                            <span className='cardInfo__sity'>МСК</span>
                        </div>
                        <div className='cardInfo__mainText'>
                            <div className='text-title'>Круглый стол с хэдофисами НТО: новые турпродукты и триггеры для продвижения на туристов из России и СНГ</div>
                            <div className='text-info'>Официальное открытие «OTM: Зима 20/21»: онлайн-сессия с участием представителей туристических офисов Греции, Польши, Венгрии, Беларуси и Риги.</div>
                            <div className='button-program '>
                                <div className={'program_link '+(isShowProgram ? "isActive":'')} onClick={onProgramClick}>Программа</div>
                                {isShowProgram ? <Program fetchProgram={fetchProgram} /> : ""}
                            </div>
                        </div>
                        <div className='cardInfo__right'>
                                <ButtonComponent onClick={onAddButtonClick} nameButton={'Добавить'} simbol={plusButton} activeSimbol={checkmark} status={isAddClick} isActiveName={"Добавлено"}/>
                            <div className='cardInfo__count'>615 участников уже записались</div>
                        </div>
                    </div>
                    <div className='text-over-slide-box'>
                        <span className='text-over-slide'>Национальная организация туризма Кореи</span>
                        <span className='text-over-slide'></span>
                    </div>
                    <div className='slide'></div>
                </div>
            </div>
        </div>
    )
}

export default ListView