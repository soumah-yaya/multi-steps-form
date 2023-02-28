import { useRef } from 'react'
import { useDispatch } from '../../hooks';
// styles
import './input.css'

// input component
const Input = ({ isError, classname, value, onchange, onblur, label, type = "text",placeholder }) => {
    
    const dispatch = useDispatch();
   
    let InvalidEmailmessage = "invalid email.";
    let InvalidMobilemessage = "invalid phone number.";
    let requiredFieldMessage = "This field is required."

    let message = useRef(requiredFieldMessage);
    

    const handleOnBlur = (e) => {
        let ERROR_NAME = findErrorName(e.target.type)

        if (value.trim().length === 0) { // check if input is empty

            dispatch({ type: "ERROR", payload: { name: ERROR_NAME , value: true}}) ;       
            message.current = requiredFieldMessage;
        
        } else if (e.target.type === 'email') {      //if email input then validate email       
           
            if (isValidEmail(value)) {
                dispatch({ type: "ERROR", payload: { name: 'emailError', value: false } }); 
               
            }else{
                dispatch({ type: "ERROR", payload: { name: 'emailError', value: true } });
                message.current = InvalidEmailmessage;
                
            }
        }
        else if (e.target.type === 'tel') {  // if tel input then valid phone number

            if (isValidPhone(value)) {

                dispatch({ type: "ERROR", payload: { name: 'phoneError', value: false } });

            } else {

                dispatch({ type: "ERROR", payload: { name: 'phoneError', value: true } });
                message.current = InvalidMobilemessage;

            }
        }
        // input is not empty
        else {
            dispatch({ type: "ERROR", payload: { name: ERROR_NAME, value: false } });
        }
        
        onblur (e);
    }

    function findErrorName(str){
       
        if (str === 'text') return'nameError';
        if (str === 'email') return 'emailError';
        if (str === 'tel') return 'phoneError';
    }

    function isValidEmail(value) {
        let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
        return reg.test(String(value).toLowerCase())
    }

    function isValidPhone(value) {
        let reg = /^[+]*\d{9,11}$/g;
        return reg.test(String(value).toLowerCase())
    }
    
    // remove error on input
    const handleOnInput = (e)=>{
        let ERROR_NAME = findErrorName(e.target.type)
        dispatch({ type: "ERROR", payload: { name: ERROR_NAME, value: false } }); 
    }

    return (
        <div className={classname}>
            <div className="label">
                <label htmlFor={label}>{label}</label>
                {
                    isError && <div className="error-message">
                        <b>{message.current}</b>
                    </div>
                }
            </div>
            <input onInput={handleOnInput} className={isError ? "error":""} onBlur={handleOnBlur} value={value} onChange={onchange} type={type} id={label} placeholder={placeholder} />
        </div>
    )
}
export default Input