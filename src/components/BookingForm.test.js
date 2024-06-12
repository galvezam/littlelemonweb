// BookingForm.test.js
//import { render, screen } from "@testing-library/react";
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText(/Reserve a Table/i); // Adjust the text based on your component
    expect(headingElement).toBeInTheDocument();
});

describe('BookingForm JavaScript Validation', () => {
    let mockSubmitForm;

    beforeEach(() => {
        mockSubmitForm = jest.fn();
    });

    test('Submit button is disabled when form is invalid', () => {
        render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={mockSubmitForm} bookingData={[]} />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeDisabled();
    });

    test('Submit button is enabled when form is valid', () => {
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={mockSubmitForm} bookingData={[]} />);
        
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-06-20' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
        
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeEnabled();
    });

    test('Form submit calls submitForm with correct data', () => {
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={mockSubmitForm} bookingData={[]} />);
        
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-06-20' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: '2024-06-20',
            time: '17:00',
            name: 'John Doe',
            email: 'john.doe@example.com',
        });
    });
});

