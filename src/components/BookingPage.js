import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch }) => {
    return (
        <div>
            <h1>Reserve a Table</h1>
            <p>Please fill out the form below to book a table at Little Lemon.</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
};

export default BookingPage;