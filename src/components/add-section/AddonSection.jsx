import AddonLabel from "../addon-label/AddonLabel";
import Intro from "../intro/Intro";

// styles
import './addon-section.css'

export default function AddonSection(){
    return (
        <section className='addons'>
            <Intro title="Pick add-ons" description="Add-ons help enhance your gaming experience." />

            <div className="addons-options">

                <AddonLabel month={1} year={10} title="Online Service" description="Access to multiplayer games" />
                <AddonLabel month={2} year={20} title="Larger storage" description="Extra 1TB of cloud save" />
                <AddonLabel month={2} year={20} title="Customizable-Profile" description="Custom theme on your profile" />

            </div>

        </section>
    )
}