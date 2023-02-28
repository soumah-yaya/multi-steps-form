// helpers
import { captalizeFisrtCharacter } from "../../utils/helpers";
// styles
import './intro.css'

// intro component
export default function Intro({ title, description }) {
    title = captalizeFisrtCharacter(title);
    description = captalizeFisrtCharacter(description)
    return (
        <>
            <h1 className='main-title'>{title}</h1>
            <p className='main-desc'>{description}</p>
        </>
    )
}