// reducer.test.js
import { initializeTimes, updateTimes } from './Main'; // Adjust the import based on your file structure

test('initializeTimes returns correct initial times', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('updateTimes returns the same times regardless of the action', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', date: '2023-12-31' };
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toEqual(initialState);
});
