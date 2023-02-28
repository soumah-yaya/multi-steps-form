import { useDispatch, useProps } from "../../hooks";
import Checkbox from "../checkbox/Checkbox";

// styles
import './addon-label.css'

export default function AddonLabel({ title, description, month, year, className = "" }) {

    const { isYearly,addon } = useProps()
    const dispatch = useDispatch()

const handleCheckboxCjhnage = (value)=>{
    // if value is empty update addon to zero
    dispatch({ type: 'UPDATE_ADDON', payload: { [value]: isYearly ?year:month} })
   
}
    let classname = `addon ${addon[title] !== 0 && 'selected'} online-service`
    return (
        <label className={classname}>
            <Checkbox checked={addon[title] !== 0} name={title} onchecked={handleCheckboxCjhnage} />

            <div className='addons-label'>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="addons-price">
                {
                    !isYearly
                        ? <span className='monthly'>+${month}/mo</span>
                        : <span className='yearly'>+${year}/yr</span>
                }
            </div>
        </label>
    )
}