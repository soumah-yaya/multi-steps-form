import { useEffect } from "react";
import { useDispatch, useProps } from "../../hooks";
import { CalculateTotal } from "../../utils/helpers";
import Intro from "../intro/Intro";
import Review from "../review/Review";

// style
import './finishup-section.css'

export default function FinishupSection() {
    const { isYearly, plan, addon } = useProps();    
   
    // let total = plan.value + Object.values(addon).reduce((a, b) => a + b, 0);
    let total = CalculateTotal(plan,addon);
    
    return (
        <section className='finishup'>
            <Intro title="Finishing up" description="Double-check everything looks OK before confirming." />
            <div className="finish-up">
                <div className="review-wrapper">
                    <ArcadeReview />
                    <div className='separator'></div>
                    {
                        Object.keys(addon).filter(item=>{
                            return addon[item] !== 0;
                        }).map(item=>{
                            let value = addon[item];
                            return (
                                <Review key={item} title={item} month={value} year={value} />
                            )
                        })
                    }
                    

                </div>
                
                <div className='total'>
                    {
                        isYearly
                            ? <Total value={total} />
                            : <Total value={total}  />

                    }
                </div>
            </div>

        </section>
    )
}

const Total = ({value})=>{
    const { isYearly } = useProps();
   
    let type = !isYearly ? "month":"year";
    let totalValue = !isYearly ? <span >+${value}/mo</span> : <span >+${value}/yr</span>

    return (
        <div className="review-total">
            <p >Total (per {type})</p>
            {totalValue  }
        </div>
    )
}

const ArcadeReview = ()=>{
    const { isYearly, plan } = useProps();
    const dispatch = useDispatch();

    let title = !isYearly
        ? <h4 >{plan.option} (Monthly)</h4>
        : <h4 >{plan.option} (yearly)</h4>

    let price = !isYearly
        ? <span >${plan.value}/mo</span>
        : <span >${plan.value}/yr</span>

    return (
        <div className="review-arcacde">
            <div className="review-label">
                {title}
                <button onClick={() => dispatch({ type:"UPDATE_STEP", payload:2})} className='review-link' href="#">Change</button>
            </div>
            <div className="review-price">
                {price}
            </div>
        </div>
    )
}