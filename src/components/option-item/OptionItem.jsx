import { useDispatch, useProps } from "../../hooks";
import { captalizeFisrtCharacter } from "../../utils/helpers";

// styles
import './option-item.css'

// option item component
const OptionItem = ({current, setCurrent, month, year, free_month, option, img }) => {
    
    
    option = captalizeFisrtCharacter(option);

    const { isYearly,plan } = useProps();
    const dispatch = useDispatch();

    // handle option selection
    const handleSelection = () => {
        if(current === option){
            setCurrent("");
        } else{
            setCurrent(option);
            dispatch({ type: 'SET_PLAN', payload: { option: option, value: isYearly ?year:month}})

        }
    }
    
    return (
        <div onClick={handleSelection} className={plan.option.toLowerCase() === option.toLowerCase() ? "selected option-item-wrapper":" option-item-wrapper"}>
            <div className="icon">
                <img src={img} alt={option + " plan"} />
            </div>
            <div className="detail">
                <p>{option}</p>
                {
                    !isYearly ?
                        <span >${month}/mo</span> :
                        <div >
                            <span className='yearly'>${year}/yr</span>
                            <br />
                            <span className='free-months'>{free_month} months free</span>
                        </div>
                }

            </div>
        </div>
    )
}
export default OptionItem;