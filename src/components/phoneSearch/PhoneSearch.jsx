import React, { useState, useEffect, useRef } from 'react';
import "./PhoneSearch.sass"


const PhoneSearch = () => {
  const [card, setCard] = useState('');
  const [outputPhone, setOutputPhone] = useState();
  const inputPhone = useRef();

  const handleChange = () => {
    const cardValue = inputPhone.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputPhone.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''
      }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
    const numbers = inputPhone.current.value.replace(/(\D)/g, '');
    setCard(numbers);
  };

  useEffect(() => {

    if((card === "")&&(document.activeElement === inputPhone.current)){
      inputPhone.current.style.borderColor = "#85b6ff";
    }else if(card.length>0){
      inputPhone.current.style.borderColor = "yellow";
    }  
  }, [card]);

 const onFocusHandler = () =>{
   if(card === ""){
    inputPhone.current.style.borderColor = "#85b6ff";
   }
 }

 const onBlurHandler = () =>{
  if(card === ""){
   inputPhone.current.style.borderColor = "#000000";
  }
}
  return (

    <div class="formBox">
      <label>Телефон</label>
      <input className="formBox__input" 
      type="text"
       placeholder="999-999-99-99" 
       ref={inputPhone} 
       onChange={handleChange}
       onFocus={onFocusHandler}
       onBlur={onBlurHandler} />
      <div className ="formBox__output">{outputPhone}</div>
      <button>Добавить номер</button>
    </div>
  );
};

export default PhoneSearch;
