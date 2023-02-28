import { useProps } from "../../hooks"
import { captalizeFisrtCharacter } from "../../utils/helpers";

export default function Review ({title="",month,year}){
    const { isYearly } = useProps();
    title= captalizeFisrtCharacter(title);
    
    return (
        <div className="review ">
            <p>{title}
                {
                    !isYearly
                        ? <span>+${month}/mo</span>
                        : <span>+${year}/yr</span>
                }
            </p>
        </div>
    )
}