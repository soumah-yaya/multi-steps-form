
import { useDispatch, useProps } from '../../hooks';
import Input from '../input/Input';
import Intro from '../intro/Intro';

// styles
import './infoSection.css';


const InfoSection = () => {

    const props = useProps();
    const dispatch = useDispatch()

    const onblur = (e)=>{  //trim input value on blur

       switch(e.target.type){
           case "text": dispatch({ type: "UPDATE_NAME", payload: e.target.value.trim() }); break;
           case "email": dispatch({ type: "UPDATE_EMAIL", payload: e.target.value.trim() }); break;
           case "tel": dispatch({ type: "UPDATE_PHONE", payload: e.target.value.trim() }); break;
           default:break;
       }
    }
    
    return (
        <section className="info">
            <Intro title="Personal Info" description="Please provide your name, email address, and phone number." />
            <Input
            value={props.name}
                onchange={(e) => dispatch({type:"UPDATE_NAME",payload:e.target.value})}
                className="name"
                label="Name"
                type="text"
                placeholder="e.g. Stephen King"
                onblur={onblur}
                isError={props.errors.nameError}
            />
            <Input
                value={props.email}
                onchange={(e) => dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })}
                className="email"
                label="Email Address"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                onblur={onblur}
                isError={props.errors.emailError}
            />
            <Input
                value={props.phone}
                onchange={(e) => dispatch({ type: "UPDATE_PHONE", payload: e.target.value })}
                className="phone"
                label="Phone Number"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                onblur={onblur}
                isError={props.errors.phoneError}
            />

        </section>
    )
}
export default InfoSection;
