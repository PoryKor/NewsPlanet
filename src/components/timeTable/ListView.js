import React from 'react'
import Program from './Program'

const ListView = () => {

    let fetchProgram = [{num: '1',text:'one'},{num: '2',text:'two'},{num: '3',text:'tree'},{num: '4',text:'Four'}]

  return (
    <div className='list-Box'>
        <div className='header__list'>
            <div className='header__data'>
                <span>12 октября </span><span>|</span><span>Вторник</span>
            </div>
        </div>
        <div className='main__list'>
            <div className='cardInfo'>
                <div className='cardInfo__time'></div>
                <div className='cardInfo__mainText'>
                    <div className='text-title'>Title</div>
                    <div className='text-info'>Info</div>
                    <div className='button-program'>
                        {isShowProgramm? <Program fetchProgram={fetchProgram}/>: ""}
                    </div>
                </div>
                <div className='cardInfo__addButton'></div>
                <div className='cardInfo__count'></div>
            </div>
            <div className='slide'></div>
        </div>
    </div>
  )
}

export default ListView