import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

const updateTimes = (state, action) => {
    // For now, return the same available times regardless of the date
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes(); // You can customize this based on action.date
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    );
};

export default Main;
