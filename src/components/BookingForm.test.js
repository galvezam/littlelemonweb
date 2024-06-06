// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText(/Reserve a Table/i); // Adjust the text based on your component
    expect(headingElement).toBeInTheDocument();
});
