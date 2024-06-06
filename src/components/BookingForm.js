import React, { useState } from 'react';

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
            >
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default BookingForm;
