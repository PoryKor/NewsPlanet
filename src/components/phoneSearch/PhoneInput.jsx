import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'

const PhoneInput = (props) => {
    const choseDataNav = useSelector(state => state.phoneData)



    const handleChange = () => {
        const cardValue = props.inputPhone.current.value
          .replace(/\D/g, '')
          .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        props.inputPhone.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
        const numbers = props.inputPhone.current.value.replace(/(\D)/g, '');
        if(numbers===undefined){
            props.setCard("");
        } else {
            props.setCard(numbers);
        }
       
      };
    
      useEffect(() => {
        if((props.card === "")&&(document.activeElement === props.inputPhone.current)){
            props.inputPhone.current.style.borderColor = "#85b6ff";
        }
        if((props.outputPhone.length>0)&&(props.card !== "")){
            props.inputPhone.current.style.borderColor = "#85b6ff";
        } 
        if((props.outputPhone.length===0)&&(props.card !== ""))
        props.inputPhone.current.style.borderColor = "yellow";
      }, [props.card,props.outputPhone]);
    
     const onFocusHandler = () =>{
       if(props.card === ""){
        props.inputPhone.current.style.borderColor = "#85b6ff";
       }
     }
    
     const onBlurHandler = () =>{
      if(props.card === ""){
        props.inputPhone.current.style.borderColor = "#000000";
      }
    }
    

    return <div className='phoneInput'>
        <input className="formBox__input"
            type="text"
            placeholder="999-999-99-99"
            ref={props.inputPhone}
            onChange={handleChange}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}/>
        <div className="formBox__output"> 
        {choseDataNav.filter((val)=>{
      if(props.card == ""){
        return ""
      } else if(val.includes(props.card)){
        return val
      }
    }).map((item, i) => (
                   <div key={i}>{item}</div> 
                  ))}
                  </div>
    </div>;
};

export default PhoneInput;
