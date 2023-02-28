import { useDispatch, useProps } from "../../hooks";
import RadioButton from "../radio-button/RadioButton";

// style
import './toggle-month-year.css'

// function Toggle component
export default function ToggleMonthAndYear() {

    const {isYearly} = useProps()

    const dispatch = useDispatch();

    const toggleMonth = () => {
        dispatch({ type: 'MONTHLY' })
    }

    const toggleYear = () => {
        dispatch({ type: 'YEARLY' })
    }
    
    return (
        <div className="select-basis">
            <span className={!isYearly && "selected"} onClick={toggleMonth}>Monthly</span>
            <RadioButton />
            <span className={isYearly && "selected"} onClick={toggleYear}>Yearly</span>
        </div>
    )
}