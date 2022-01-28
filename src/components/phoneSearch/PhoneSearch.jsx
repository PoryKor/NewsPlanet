import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { phoneDataAct } from '../../actions/phoneDataAct'
import PhoneInput from './PhoneInput';
import "./PhoneSearch.sass"


const PhoneSearch = () => {
  const [card, setCard] = useState('');
  const [outputPhone, setOutputPhone] = useState([]);
  const inputPhone = useRef();

  const choseDataNav = useSelector(state => state.phoneData)
  const dispatch = useDispatch()

const addPhoneClick = () => {

  dispatch(phoneDataAct(card))
  inputPhone.current.value = ""
  setCard('')
  inputPhone.current.style.borderColor = "#000000";
}


useEffect(() => {
  if(card === ""){
    setOutputPhone([])
} else {
  let searchPhoneArr = choseDataNav.filter((val)=>{
    if(card == ""){
      return val
    } else if(val.includes(card)){
      return val
    }
  }).map((item,i)=>item)
 setOutputPhone(searchPhoneArr)
}
}, [card]);


  return (

    <div className="formBox">
      <label>Телефон</label>
      <PhoneInput card={card} setCard={setCard} outputPhone={outputPhone} setOutputPhone={setOutputPhone} inputPhone={inputPhone}/>
      <button onClick={addPhoneClick}>Добавить номер</button>
    </div>
  );
};

export default PhoneSearch;
