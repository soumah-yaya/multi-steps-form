import React from 'react'
import { useDispatch, useProps } from '../../hooks'

// style
import './nav-button.css'

export default function NavButton({onSubmit}) {

  const { step, name, email, phone, isFinished, errors } = useProps();
  const dispatch = useDispatch();

  const incrementStep = (e) => {
    e.preventDefault();
    // validate info fields before moving forward

    if(step === 1) {
      if (name.length === 0 && email.length === 0 && phone.length === 0) {
        dispatch({type:'SET_ERROR'});
      return
    }
      if (errors.nameError || errors.emailError || errors.phoneError){
        return
      }
  }
    dispatch({ type: 'INCR_STEP' })
  }
  const decrementStep = (e) => {
    e.preventDefault();
    dispatch({ type: 'DECR_STEP' })
  }

  
  
  return (
    
   <>
    {
        !isFinished && <div className="btn-wrapper">
          <div className="btn">
            {step > 1 && <button type='button' onClick={decrementStep} className='go-back-btn'>Go Back</button>}
            {step < 4 && <button type='button' onClick={incrementStep} className='next'>Next Step</button>}
            {step === 4 && <button type='submit' className='confirm'>Confirm</button>}
          </div>
        </div>
    }
   </>
      
      
  )
}
