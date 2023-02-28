// styles
import { useProps } from '../../hooks'
import './sidebar.css'

// sidebar component
const Sidebar = () => {
const prop  = useProps()
    const data = [
        {
            id: 1,
            step: 1,
            label: 'your info'
        },
        {
            id: 2,
            step: 2,
            label: 'select your plan'
        },
        {
            id: 3,
            step: 3,
            label: 'add-ons'
        },
        {
            id: 4,
            step: 4,
            label: 'summary'
        },
    ]

    const list = data.map(({ id, step, label }) => {
        
        return (
            <li key={id} className={prop.step === step ? "active" :""}  >
                <div className='step-number'>{id}</div>
                <div className='step-title'>
                    <span>STEP {step}</span>
                    <h2>{label.toUpperCase()}</h2>
                </div>
            </li>
        )
    })

    return (
        <nav className='nav'>
            <ul>
                {
                    list
                }

            </ul>
        </nav>
    )
}

export default Sidebar