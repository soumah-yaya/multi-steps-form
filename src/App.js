
import './App.css';
import AddonSection from './components/add-section/AddonSection';
import FinishupSection from './components/finishup-section/FinishupSection';
import InfoSection from './components/info-section/InfoSection';
import NavButton from './components/nav-button/NavButton';
import PlanSection from './components/plan-section/PlanSection';
import Sidebar from './components/sidebar/Sidebar';
import ThankyouSection from './components/thankyou/ThankyouSection';
import { useDispatch, useProps } from './hooks';
import { CalculateTotal } from './utils/helpers';

export default function App() {

  // set up form submit data
  const state = useProps()
  const { step, isFinished, name, email, phone, isYearly, plan, addon } = state;

  const dispatch = useDispatch()

  let basis = isYearly ? 'yearly' : 'monthly';

  // on form submit
  const handleFormSubmit = (e) => {

    e.preventDefault();
    dispatch({ type: 'FINISH' })

    // log all data
    console.log({
      name, email, phone, basis, plan, addon, total: CalculateTotal(plan, addon)
    });

  }

  return (
    <div className='form__wrapper'>
      <form className='form' onSubmit={handleFormSubmit}>
      {/* right side content */}
        <Sidebar />
        {/* left side content */}
        <main className='main'>
          <div className="main-top">
            {/* info */}
            {step === 1 && <InfoSection />}
            {/* select plan */}
            {step === 2 && <PlanSection />}
            {/* add-ons */}
            {step === 3 && <AddonSection />}
            {/* finishing up */}
            {(step === 4 && !isFinished) && <FinishupSection />}

            {/* thank you */}
            {isFinished && <ThankyouSection />}
          </div>
          <NavButton />
        </main>

      </form>
    </div>
  );
}

