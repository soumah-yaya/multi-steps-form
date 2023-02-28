

export const initialState = {
    name:'',
    email:'',
    phone:'',
    isYearly: true,
    isError:true,
    errors:{nameError:false,emailError:false,phoneError:false},
    step:1,
    isFinished: false,
    plan:{option:"Arcade",value:0},
    addon: { 'Online Service': 0, 'Larger storage': 0, 'Customizable-Profile':0},
    
    
}

export function reducer(props, action) {

    switch (action.type) {
        case 'UPDATE_NAME': return { ...props, name: action.payload }
        case 'UPDATE_EMAIL': return { ...props, email: action.payload }
        case 'UPDATE_PHONE': return { ...props, phone: action.payload }
        case 'UPDATE_STEP': return { ...props, step: action.payload }
        case 'INCR_STEP': return { ...props, step: props.step + 1, isFinished: false }
        case 'DECR_STEP': return { ...props, step: props.step - 1, isFinished:false }
        case 'TOGGLE': return { ...props, isYearly: !props.isYearly }
        case 'MONTHLY': return { ...props, isYearly: false }
        case 'YEARLY': return { ...props, isYearly: true }
        case 'FINISH': return { ...props, isFinished: true }
        case 'ERROR': return { ...props, errors: {...props.errors, [action.payload.name]:action.payload.value} }
        case 'RESET_ERROR': return { ...props, errors: { nameError: false, emailError: false, phoneError: false } }
        case 'SET_ERROR': return { ...props, errors: { nameError: true, emailError: true, phoneError: true } }
        case 'SET_PLAN': return { ...props, plan: { ...action.payload} }
        case 'UPDATE_ADDON': { 
            let key = Object.keys(action.payload)[0];
            let ele = props.addon[key];
            if(ele !==0){
                // is already checked the reset its value to 0
                return { ...props, addon: { ...props.addon, [key]:0 } }
            }
            return { ...props, addon: { ...props.addon, ...action.payload } }
         }
        case 'RESTORE': return { ...props, ...action.payload}
       
        default: return;
    }
}

