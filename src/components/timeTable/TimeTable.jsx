import React, { useState } from 'react';
import ListView from './ListView';
import TableView from './TableView';
import './Timetable.sass'
import arrowDown from '../../img/down-arrow.svg'


const TimeTable = () => {

  const [isSwitched, setIsSwitched] = useState(true)

  const onSwitchTable =() =>{
    setIsSwitched(!isSwitched)
  }

  return (
    <>
      <div className='timeTable-box'>
        <div className='headTable'>
          <div className='headTable__text'>
            <span>Программа выставки</span>
          </div>
          <div className='button-standart headTable__switch-button' onClick={onSwitchTable}>
            <div className='button-text'>Вид рассписания:</div>
            <div className='button-text-link'>{isSwitched ? "Таблица" : "Список"}</div>
            <div className='botton-arrow'>
            <img className='arrow-down' src={arrowDown} height="9px" width='9px'></img>
            </div>
          </div>
        </div>
        {isSwitched ? <ListView /> : <TableView />}
      </div>
    </>)
};

export default TimeTable;
