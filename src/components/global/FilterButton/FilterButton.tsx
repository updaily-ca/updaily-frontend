import './FilterButton.scss';
import { useToggleClass } from '../../../utils/functions';

const FilterButton = () => {

    const [isSwitchToggled, toggleSwitch] = useToggleClass(false);




    return (
        <>

            <div

                className={`filter-btn ${isSwitchToggled ? 'active' : ''}`}

                onClick={toggleSwitch}>
                <span className="filter-btn__event">Event</span>
                <span className="filter-btn__business">Business</span>
            </div>

        </>
    )
}

export default FilterButton;