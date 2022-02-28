import React,{useState} from 'react';
import ListView from './ListView';
import TableView from './TableView';
import './Timetable.sass'

const TimeTable = () => {
  
  const [isSwitched,setIsSwitched] = useState(false)

  return (
    <>
    <div className='timeTable-box'>
      <div className='headTable'>
        <div className='headTable__text'>
          <span>Программа выставки</span>
        </div>
        <div className='headTable__switch-button'>
          <div className='button-text'>Вид рассписания:</div>
          <div className='button-text-link'>{isSwitched?"Таблица":"Список"}</div>
        </div>
      </div>
      {isSwitched? <ListView/> : <TableView/>}
    </div>
    </>)
};

export default TimeTable;
