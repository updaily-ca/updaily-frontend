import React from 'react';
import { useToggleClass } from '../../../utils/functions';
import './FilterButton.scss';

interface FilterButtonProps {
    isBusinessMode: boolean;
    toggleBusinessMode: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ isBusinessMode, toggleBusinessMode }) => {
    const [isOpen, toggleClass] = useToggleClass(isBusinessMode);

    return (
        <div
            className={`filter-btn ${isBusinessMode ? 'active' : ''}`}
            // className="filter-btn"
            onClick={() => {
                toggleBusinessMode();
            }}
        >
            <span className="filter-btn__event">Event</span>
            <span className="filter-btn__business">Business</span>
        </div>
    );
};

export default FilterButton;
