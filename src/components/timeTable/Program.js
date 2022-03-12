import React from 'react'

const Program = (props) => {
  return (
    <div className='background_list'>
    {props.fetchProgram.map((item)=>(
    <div className='progrem_list'>
        <span className='program-item'>{item.num}</span>
    <span className='program-item'>{item.text}</span></div>))}
    </div>
  )
}

export default Program