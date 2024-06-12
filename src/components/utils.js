/* global fetchAPI, submitAPI */

export const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    try {
        const times = await fetchAPI(today);
        return times;
    } catch (error) {
        console.error('Error fetching initial times:', error);
        return [];
    }
};

export const updateTimes = async (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            try {
                const times = await fetchAPI(action.date);
                return times;
            } catch (error) {
                console.error('Error updating times:', error);
                return state;
            }
        default:
            return state;
    }
    
};


