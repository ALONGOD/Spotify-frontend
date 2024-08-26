import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../store/actions/station.actions';

export function SortByModal() {
    const dispatch = useDispatch();
    const currentSortBy = useSelector(state => state.stationModule.sortBy);

    const handleSortChange = async (sortBy) => {
        if (sortBy === 'customOrder') {
            const customOrder = JSON.parse(localStorage.getItem('stationOrder'));
            if (customOrder) {
                dispatch({ type: 'SET_STATIONS', stations: customOrder });
            }
        }
        const actions = await setSortBy(sortBy);
        actions.forEach(action => dispatch(action));
    };

    const sortOptions = [
        { label: 'Recents', value: 'recents' },
        { label: 'Recently Added', value: 'recentlyAdded' },
        { label: 'Alphabetical', value: 'alphabetical' },
        { label: 'Creator', value: 'creator' },
        { label: 'Custom Order', value: 'customOrder' }
    ];

    return (
        <div className="sort-by-modal">
            <div className="modal-header">Sort by</div>
            <ul className="sort-options">
                {sortOptions.map(option => (
                    <li
                        key={option.value}
                        className={`sort-option ${currentSortBy === option.value ? 'active' : ''}`}
                        onClick={() => handleSortChange(option.value)}
                    >
                        {option.label}
                        {currentSortBy === option.value && ' ✔'}
                    </li>
                ))}
            </ul>
        </div>
    );
}
