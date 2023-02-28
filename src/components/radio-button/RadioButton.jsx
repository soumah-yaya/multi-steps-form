import { useDispatch, useProps } from "../../hooks";

// style
import './radio-button.css'

// radio button component
export default function RadioButton() {
    const { isYearly } = useProps();
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE' })
    }
    return (
        <label className="radio-wrapper">
            <input checked={isYearly} onChange={() => { }} onClick={handleToggle} className='original-btn' type="radio" />
            <span className="radio-btn"></span>
        </label>
    )
}