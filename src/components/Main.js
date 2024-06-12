import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from './initAPI';
// import { initializeTimes, updateTimes} from './utils';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.date));
        default:
            return state;
    }
};


const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [bookingData, setBookingData] = useState(() => {
        const savedData = localStorage.getItem('bookingData');
        return savedData ? JSON.parse(savedData) : [];
    });

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            const updatedBookingData = [...bookingData, formData];
            setBookingData(updatedBookingData);
            localStorage.setItem('bookingData', JSON.stringify(updatedBookingData));
            navigate('/confirmed');
        } else {
            alert('Failed to submit booking.');
        }
    };

    useEffect(() => {
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
    }, [bookingData]);
    

    return (
        <BookingPage 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm} 
            bookingData={bookingData} 
        />
    );
};

export default Main;
