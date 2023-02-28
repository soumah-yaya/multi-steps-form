import React from 'react'
import Option from '../option/Option'
import Intro from '../intro/Intro'

// styles
import './plan-section.css'

// PlanSection component
export default function PlanSection() {
    return (
        <section className="plan">
            <Intro title="select your plan"
                description="you have the option of monthly or yearly billing."
            />
            <Option />
        </section>
    )
}








