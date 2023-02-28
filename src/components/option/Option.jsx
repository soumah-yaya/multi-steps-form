import OptionItem from "../option-item/OptionItem"
import ToggleMonthAndYear from "../toggle-month-year/ToggleMonthAndYear"

// style
import './option.css'

// images
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import { useState } from "react"


// option component
const Option = () => {
    const [current, setCurrent] = useState("arcade")
   
    return (
        <div className="options">
            <div className="options-items">
                <OptionItem
                    month={9}
                    year={90}
                    free_month={2}
                    option="arcade"
                    img={arcade}
                    current={current}
                    setCurrent={setCurrent}
                   
                />
                <OptionItem
                    month={12}
                    year={120}
                    free_month={2}
                    option="advanced"
                    img={advanced}
                    current={current}
                    setCurrent={setCurrent}
                />
                <OptionItem
                    month={15}
                    year={150}
                    free_month={2}
                    option="pro"
                    img={pro}
                    current={current}
                    setCurrent={setCurrent}
                   
                />
            </div>
            <ToggleMonthAndYear />
        </div>
    )
}

export default Option