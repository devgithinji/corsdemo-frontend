const API_URL = 'http://localhost:9008/api/v1/greeting/';

export const getGreetings = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch greetings');
    }
    return response.json();
};

export const sendGreeting = async (greeting) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(greeting),
    });
    if (!response.ok) {
        throw new Error('Failed to send greeting');
    }
    return response.json();
};
