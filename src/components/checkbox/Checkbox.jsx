
// styles
import './checkbox.css'

export default function Checkbox({ checked, name, onchecked }) {

    const handleCheckboxChange = (e) => {

        onchecked(e.target.name)
       
    }
    return (
        <div className="addons-chkbox">
            <input name={name} checked={checked} type="checkbox" onChange={handleCheckboxChange} />
            <span className='checkbox'></span>
        </div>
    )
}